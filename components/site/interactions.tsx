'use client'

import { useEffect } from 'react'
import { PRODUCTS_BY_ID, formatPeso } from '@/lib/products'

function setupInteractions(signal: AbortSignal) {
  const cleanups: Array<() => void> = []
  const on = <K extends keyof HTMLElementEventMap>(
    target: EventTarget,
    type: K | string,
    handler: (event: any) => void,
    options: AddEventListenerOptions = {},
  ) => target.addEventListener(type, handler, { ...options, signal })

  const hero = document.querySelector<HTMLElement>('.logo-hero')
  const logoWrap = document.querySelector<HTMLElement>('.logo-wrap')
  const logoImg = document.querySelector<HTMLImageElement>('.logo-img')
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  const finePointer = window.matchMedia('(pointer: fine)').matches

  document
    .querySelectorAll<HTMLImageElement>('.id-card__photo img')
    .forEach((img) => {
      const markLoaded = () => {
        img.dataset.loaded = '1'
      }
      if (img.complete) markLoaded()
      else {
        on(img, 'load', markLoaded)
        on(img, 'error', markLoaded)
      }
    })

  if (hero && logoWrap && logoImg) {
    const markHeroLoaded = () => hero.classList.add('is-loaded')
    if (logoImg.complete) markHeroLoaded()
    else {
      on(logoImg, 'load', markHeroLoaded)
      on(logoImg, 'error', markHeroLoaded)
    }
    if (!reducedMotion && finePointer) {
      on(hero, 'pointermove', (event: PointerEvent) => {
        const rect = logoWrap.getBoundingClientRect()
        const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width
        const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height
        logoWrap.style.transform = `perspective(1200px) rotateY(${8 * dx}deg) rotateX(${-(8 * dy)}deg)`
      })
      on(hero, 'pointerleave', () => {
        logoWrap.style.transform = ''
      })
    }
  }

  const toast = document.getElementById('toast')!
  let toastTimer: ReturnType<typeof setTimeout> | undefined
  const showToast = (message: string) => {
    toast.textContent = message
    toast.classList.add('is-visible')
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2800)
  }
  cleanups.push(() => clearTimeout(toastTimer))

  const menu = document.getElementById('menu')!
  const menuButton = document.getElementById('menu-btn')!
  const setMenuOpen = (open: boolean) => {
    menu.classList.toggle('is-open', open)
    menu.inert = !open
    menuButton.setAttribute('aria-expanded', String(open))
    menuButton.textContent = open ? 'Close' : 'Menu'
    document.body.style.overflow = open ? 'hidden' : ''
  }
  on(menuButton, 'click', () =>
    setMenuOpen(!menu.classList.contains('is-open')),
  )
  on(document, 'keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenuOpen(false)
      menuButton.focus()
    }
  })
  document
    .querySelectorAll<HTMLElement>('[data-scroll-target]')
    .forEach((link) => {
      on(link, 'click', (event: Event) => {
        event.preventDefault()
        const wasOpen = menu.classList.contains('is-open')
        if (wasOpen) setMenuOpen(false)
        const target = document.getElementById(link.dataset.scrollTarget!)
        if (target) {
          target.scrollIntoView({
            behavior: reducedMotion || wasOpen ? 'auto' : 'smooth',
          })
          history.replaceState(null, '', `#${target.id}`)
        } else {
          showToast('Our About Us section is coming soon!')
        }
      })
    })

  const counter = document.getElementById('counter')!
  const progress = document.getElementById('progress')!
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counter.textContent = String(
              (entry.target as HTMLElement).dataset.section,
            ).padStart(2, '0')
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    document
      .querySelectorAll('[data-section]')
      .forEach((section) => sectionObserver.observe(section))
    cleanups.push(() => sectionObserver.disconnect())
  }

  let scrollQueued = false
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.style.setProperty(
      '--p',
      max > 0 ? (window.scrollY / max).toFixed(4) : '0',
    )
    scrollQueued = false
  }
  on(
    window,
    'scroll',
    () => {
      if (!scrollQueued) {
        scrollQueued = true
        requestAnimationFrame(updateProgress)
      }
    },
    { passive: true },
  )
  updateProgress()

  document
    .querySelectorAll<HTMLElement>('.highlight__toggle')
    .forEach((toggle) => {
      on(toggle, 'click', () => {
        const item = toggle.closest('.highlight')!
        const expanded = toggle.getAttribute('aria-expanded') === 'true'
        toggle.setAttribute('aria-expanded', String(!expanded))
        item.classList.toggle('is-open', !expanded)
      })
    })

  const modal = document.getElementById('product-modal') as HTMLDialogElement
  const modalSizes = modal.querySelector<HTMLElement>(
    "[data-size-picker='modal']",
  )!
  let activeProductId = 'cassava-cake'

  const renderSizes = (productId: string, selected?: string) => {
    const product = PRODUCTS_BY_ID[productId]
    modalSizes.innerHTML = ''
    product.sizes.forEach((size, index) => {
      const label = document.createElement('label')
      label.className = 'size-opt'
      const checked = selected ? size.name === selected : index === 0
      label.innerHTML = `<input type="radio" name="size-modal" value="${size.name}"${checked ? ' checked' : ''}><span class="size-opt__name">${size.name}</span><span class="size-opt__price">${formatPeso(size.price)}</span>`
      modalSizes.appendChild(label)
    })
  }

  const selectedSize = (productId: string) => {
    const checked = modalSizes.querySelector<HTMLInputElement>('input:checked')
    const sizes = PRODUCTS_BY_ID[productId].sizes
    return (
      sizes.find((size) => checked && size.name === checked.value) ?? sizes[0]
    )
  }

  const openProduct = (productId: string) => {
    const product = PRODUCTS_BY_ID[productId]
    if (!product) return
    activeProductId = productId
    document.getElementById('modal-badge')!.textContent = product.badge
    document.getElementById('modal-name')!.textContent = product.name
    document.getElementById('modal-desc')!.textContent = product.desc
    document.getElementById('modal-sizes-label')!.textContent =
      product.sizesLabel
    const ingredients = document.getElementById('modal-ingredients')!
    ingredients.innerHTML = ''
    product.ingredients.forEach((ingredient) => {
      const item = document.createElement('li')
      item.textContent = ingredient
      ingredients.appendChild(item)
    })
    renderSizes(productId)
    modal.showModal()
    modal.querySelector('.product-modal__scroll')!.scrollTop = 0
  }

  document.querySelectorAll<HTMLElement>('[data-product]').forEach((card) => {
    const productId = card.dataset.product!
    card
      .querySelectorAll('[data-open-product]')
      .forEach((button) => on(button, 'click', () => openProduct(productId)))
    on(card, 'click', (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('button, a, label, input')) {
        openProduct(productId)
      }
    })
  })
  document
    .querySelectorAll('[data-close-product]')
    .forEach((button) => on(button, 'click', () => modal.close()))
  on(modal, 'click', (event: MouseEvent) => {
    if (event.target === modal) modal.close()
  })
  on(modal, 'close', () => {
    document.body.style.overflow = menu.classList.contains('is-open')
      ? 'hidden'
      : ''
  })
  on(modal, 'toggle', () => {
    if (modal.open) document.body.style.overflow = 'hidden'
  })

  const order = new Map<string, number>()
  const orderList = document.getElementById('order-list')!
  const orderEmpty = document.getElementById('order-empty')!
  const orderTotal = document.getElementById('order-total')!
  const orderTotalValue = document.getElementById('order-total-value')!
  const orderClear = document.getElementById('order-clear')!

  const renderOrder = () => {
    orderList.innerHTML = ''
    let total = 0
    order.forEach((quantity, key) => {
      const [productId, sizeName] = key.split('::')
      const product = PRODUCTS_BY_ID[productId]
      const size = product.sizes.find((entry) => entry.name === sizeName)!
      total += size.price * quantity
      const item = document.createElement('li')
      item.className = 'order__item'
      item.innerHTML = `<span class="order__item-name">${product.name} <em>${sizeName}</em> &times; ${quantity}</span><span class="order__item-price">${formatPeso(size.price * quantity)}</span><button type="button" class="order__remove" data-remove="${key}" aria-label="Remove one ${product.name} ${sizeName} from order">&minus;</button>`
      orderList.appendChild(item)
    })
    const hasItems = order.size > 0
    orderList.hidden = !hasItems
    orderTotal.hidden = !hasItems
    orderClear.hidden = !hasItems
    orderEmpty.hidden = hasItems
    orderTotalValue.textContent = formatPeso(total)
  }

  on(orderList, 'click', (event: MouseEvent) => {
    const button = (event.target as HTMLElement).closest<HTMLElement>(
      '[data-remove]',
    )
    if (!button) return
    const key = button.dataset.remove!
    const next = (order.get(key) || 0) - 1
    if (next > 0) order.set(key, next)
    else order.delete(key)
    renderOrder()
  })
  on(orderClear, 'click', () => {
    order.clear()
    renderOrder()
  })
  document.querySelectorAll('[data-add-to-order]').forEach((button) =>
    on(button, 'click', () => {
      const size = selectedSize(activeProductId)
      const key = `${activeProductId}::${size.name}`
      order.set(key, (order.get(key) || 0) + 1)
      renderOrder()
      if (modal.open) modal.close()
      showToast(
        `Added ${PRODUCTS_BY_ID[activeProductId].name} ${size.name} (${formatPeso(size.price)}) to your order`,
      )
    }),
  )

  const copyButton = document.getElementById('copy-address')
  const copyLabel = document.getElementById('copy-label')
  const addressText = document.getElementById('address-text')
  if (copyButton && copyLabel && addressText) {
    let copyTimer: ReturnType<typeof setTimeout> | undefined
    on(copyButton, 'click', async () => {
      const text = addressText.textContent!.trim()
      try {
        await navigator.clipboard.writeText(text)
        copyLabel.textContent = 'Copied!'
        showToast('Address copied to clipboard')
      } catch {
        const range = document.createRange()
        range.selectNodeContents(addressText)
        const selection = window.getSelection()!
        selection.removeAllRanges()
        selection.addRange(range)
        copyLabel.textContent = 'Selected'
        showToast('Address selected — press copy')
      }
      clearTimeout(copyTimer)
      copyTimer = setTimeout(() => {
        copyLabel.textContent = 'Copy address'
      }, 2400)
    })
    cleanups.push(() => clearTimeout(copyTimer))
  }

  const revealTargets = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )
    revealTargets.forEach((target) => revealObserver.observe(target))
    cleanups.push(() => revealObserver.disconnect())
  } else {
    revealTargets.forEach((target) => target.classList.add('is-visible'))
  }

  return () => cleanups.forEach((cleanup) => cleanup())
}

export function Interactions() {
  useEffect(() => {
    const controller = new AbortController()
    const cleanup = setupInteractions(controller.signal)
    return () => {
      controller.abort()
      cleanup()
    }
  }, [])

  return null
}

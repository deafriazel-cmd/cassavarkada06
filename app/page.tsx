import { DayRecord } from '@/components/site/day-record'
import { SiteFooter } from '@/components/site/footer'
import { Handlers } from '@/components/site/handlers'
import { Hero } from '@/components/site/hero'
import { IconSprite } from '@/components/site/icon-sprite'
import { Interactions } from '@/components/site/interactions'
import { Location } from '@/components/site/location'
import { Products } from '@/components/site/products'
import { Ribbon } from '@/components/site/ribbon'
import { SiteNav } from '@/components/site/site-nav'
import { Store } from '@/components/site/store'
import { Welcome } from '@/components/site/welcome'
import { DAY_RECORDS } from '@/lib/day-records'

export default function Page() {
  return (
    <>
      <IconSprite />
      <SiteNav />
      <Hero />
      <main id="main">
        <Welcome />
        <Ribbon />
        <Store />
        <Products />
        {DAY_RECORDS.map((record) => (
          <DayRecord key={record.day} record={record} />
        ))}
        <Location />
        <Handlers />
      </main>
      <SiteFooter />
      <div className="toast" id="toast" role="status" aria-live="polite" />
      <Interactions />
    </>
  )
}

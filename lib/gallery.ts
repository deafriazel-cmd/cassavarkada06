export type GalleryTape = 'sun' | 'rose' | 'mint' | 'sky'

export type GalleryPhoto = {
  src: string
  alt: string
  caption: string
  captionIcon: string
  tilt: string
  position: string
  tape: GalleryTape
  sticker?: string
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: '/img/gallery/booth-01.jpg',
    alt: 'A smiling student at the CASSAVARKADA booth holds out two wrapped treats while a classmate stands behind the menu board and food trays',
    caption: 'Fresh samples, big smiles',
    captionIcon: 'smile',
    tilt: '-3deg',
    position: '60% 30%',
    tape: 'sun',
    sticker: 'cake',
  },
  {
    src: '/img/gallery/booth-02.jpg',
    alt: 'Three students pose in front of the colorful CASSA VARKADA bunting, one flashing a peace sign, with the menu stand beside them',
    caption: 'Peace, love, cassava!',
    captionIcon: 'heart',
    tilt: '2.5deg',
    position: '45% 30%',
    tape: 'rose',
  },
  {
    src: '/img/gallery/booth-03.jpg',
    alt: 'Two students in hairnets and face masks serve a customer at the pink gingham booth decorated with crocheted flowers',
    caption: 'Served with care',
    captionIcon: 'sparkle',
    tilt: '-1.5deg',
    position: '35% 40%',
    tape: 'mint',
    sticker: 'heart',
  },
  {
    src: '/img/gallery/booth-04.jpg',
    alt: 'Two smiling women stand in front of the Cassa Varkada logo banner, one holding a slice of cassava cake, with food containers on the table',
    caption: 'Barkada at the booth',
    captionIcon: 'star',
    tilt: '3deg',
    position: '55% 30%',
    tape: 'sky',
  },
  {
    src: '/img/gallery/booth-05.jpg',
    alt: 'Students at the booth lift the lid of a tray of sesame-coated butchi balls while a customer reaches in to pick one',
    caption: 'Butchi, anyone?',
    captionIcon: 'utensils',
    tilt: '-2.5deg',
    position: '50% 55%',
    tape: 'rose',
    sticker: 'star',
  },
  {
    src: '/img/gallery/booth-06.jpg',
    alt: 'A customer in a blue shirt receives a striped paper bag from a student in uniform at the decorated CASSAVARKADA booth',
    caption: 'Take-home treats',
    captionIcon: 'gift',
    tilt: '1.5deg',
    position: '50% 45%',
    tape: 'sun',
  },
  {
    src: '/img/gallery/booth-07.jpg',
    alt: 'A visitor wearing a rosette ribbon leans in to taste a treat from a woven basket while students in aprons look on',
    caption: 'First taste, first smile',
    captionIcon: 'cassava',
    tilt: '-3.5deg',
    position: '25% 40%',
    tape: 'mint',
    sticker: 'sparkle',
  },
  {
    src: '/img/gallery/booth-08.jpg',
    alt: 'A wider view of the booth under the CASSA VARKADA bunting as a visitor sniffs a basket of treats and students in masks serve behind the counter',
    caption: 'Sniff test: passed!',
    captionIcon: 'leaf',
    tilt: '2deg',
    position: '45% 45%',
    tape: 'sky',
  },
  {
    src: '/img/gallery/booth-09.jpg',
    alt: 'A smiling student with glasses holds a striped paper bag beside the vine-wrapped booth post while a classmate behind the counter looks on',
    caption: 'Thank you, come again!',
    captionIcon: 'cake',
    tilt: '-1deg',
    position: '50% 40%',
    tape: 'rose',
    sticker: 'heart',
  },
]

import * as D from '../data'

export default function Tailwindcss() {
  return (
    <div className="bg-blick/70">
      <p className='p-4 text-3xl text-white w-fill'>Tailwindcss</p>
      <p className='italic text-gray-50 line-clamp-3'>{D.randomParagraphs(10)}</p>
      <button className='btn btn-primary' style={{textTransform: 'none'}}>
        Button
      </button>
    </div>
  )
}
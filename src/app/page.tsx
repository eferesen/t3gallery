import Link from "next/link";
const mockUrls = [
  'https://utfs.io/f/961fb3ff-c4a8-448e-907e-e8712ba177d1-1t248.jpg',
  'https://utfs.io/f/41d88091-43ad-4a04-ac27-27760f349747-1t249.jpg',
  'https://utfs.io/f/ce5ea515-7947-418c-aeb0-cc727d080877-1t24b.jpg',
  'https://utfs.io/f/2de0956f-6d4e-44a9-a0e7-d725d255b151-1t247.jpg'
]

const mockImage = mockUrls.map((url, index)=> ({
  id: index + 1,
  url
}))
export default function HomePage() {
  return (
    <main className=''>
      <div className='flex flex-wrap gap-4'>
        {
          mockImage.map((image) =>(
            <div key={image.id} className='w-48'>
              <img src={image.url}  />
            </div>
          ))
        }
      </div>
      Hello Gallery in Progress
    </main>
  );
}

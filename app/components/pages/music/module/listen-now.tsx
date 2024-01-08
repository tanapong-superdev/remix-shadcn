import PagesMusicModuleGallery from "./gallery";
import type { Gallery } from "./gallery";
export default function PagesMusicModuleListenNow() {
  const listenNow: Gallery[] = [
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "Async Awakenings",
      artist: "Nina Netcode",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "The Art of Reusability",
      artist: "Lena Logic",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75",
    },
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75",
    },
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      image:
        "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75",
    },
  ];
  return (
    <div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">Listen Now</span>
        <span className="text-slate-400">
          Top picks for you. Updated daily.
        </span>
      </div>
      <hr className="mt-4" />

      <div className="sm:overflow-x-scroll   py-4">
        <div className="flex flex-col  sm:flex-row gap-8 sm:min-w-max ">
          {listenNow.map((gallery, index) => (
            <div className="sm:w-[250px] w-full" key={index}>
              <PagesMusicModuleGallery
                name={gallery.name}
                artist={gallery.artist}
                image={gallery.image}
              ></PagesMusicModuleGallery>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

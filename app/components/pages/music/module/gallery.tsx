import { useState } from "react";
import { Skeleton } from "~/components/ui/skeleton";
import "./gallery.css";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "~/components/ui/context-menu";
export type Gallery = {
  name?: string;
  artist?: string;
  image?: string;
  width?: number;
  height?: number;
  isSmall?: boolean;
};
export default function PagesMusicModuleGallery({
  name,
  width,
  height,
  artist,
  image,
  isSmall,
}: Gallery) {
  const [imageLoaded, setImageLoaded] = useState(true);
  // default value

  name = name || "React Rendezvous";
  artist = artist || "Ethan Byte";
  width = width || 250;
  height = height || 333;
  image = image || "https://picsum.photos/250/333";
  isSmall = isSmall || false;
  // console.log(gallery);

  setTimeout(() => {
    setImageLoaded(false);
  }, 1000);
  const classImage = `image-container  overflow-hidden rounded-lg w-fullx  sm:w-[${width}px] sm:h-[${height}px]`;
  return (
    <div className="w-full">
      <ContextMenu>
        <ContextMenuTrigger className="w-full h-full  ">
          <div className={classImage}>
            {imageLoaded ? (
              <div className="space-y-2  w-full h-full">
                <Skeleton
                  className={
                    isSmall
                      ? "w-full h-[150px]"
                      : "w-full h-[444px] sm:h-[333px]"
                  }
                />
              </div>
            ) : (
              <img
                className={
                  imageLoaded
                    ? "hidden"
                    : isSmall
                    ? "h-[150px] w-full    rounded-lg object-cover transition-all hover:scale-105  aspect-[3/4]"
                    : "w-full h-full  rounded-lg object-cover transition-all hover:scale-105  aspect-[3/4]"
                }
                loading="lazy"
                src={image}
              />
            )}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Play</ContextMenuItem>
          <ContextMenuItem>Add to Playlist</ContextMenuItem>
          <ContextMenuItem>Queue</ContextMenuItem>
          <hr className="my-2" />
          <ContextMenuItem>Go to Album</ContextMenuItem>
          <ContextMenuItem>Go to Artist</ContextMenuItem>
          <hr className="my-2" />
          <ContextMenuItem>Save to Your Library</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <div className="d-flex flex-col mt-2">
        {imageLoaded ? (
          <div>
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-lg sm:text-sm font-medium">{name}</div>
            <div className="text-md sm:text-xs text-muted-foreground">
              {artist}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

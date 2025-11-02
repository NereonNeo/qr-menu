import clsx from "clsx/lite";

interface ShopPreviewProps {
  className?: string;
  wrapperClassName?: string;
}

export const ShopPreview = (props: ShopPreviewProps) => {
  const { className, wrapperClassName } = props;

  return (
    <div className={clsx(wrapperClassName)}>
      <iframe
        allowFullScreen
        src="https://shopnext.uz"
        className={clsx(className, "shadow-md shadow-gray-300 rounded-[3rem] border-[0.375rem] border-white")}
        referrerPolicy="strict-origin-when-cross-origin"
        title="Milky Way Sweep (Disposal Unit Mix) 10 Hours"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

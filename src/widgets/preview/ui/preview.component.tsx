import { useState } from "react";

import clsx from "clsx/lite";

import { Button } from "@/shared/ui/button";

import { ShopPreview } from "@/features/shop-preview/shop-preview.entry";

// 2xl:w-2xl-preview xl:w-xl-preview md:w-md-preview
export const Preview = () => {
  const [isShowPreview, setIsShowPreview] = useState(false);

  const handleTogglePreview = () => setIsShowPreview((preview) => !preview);

  return (
    <>
      <div
        className={clsx(
          isShowPreview && "-translate-y-full",
          "2xl:w-2xl-preview xl:w-xl-preview md:w-md-preview md:top-0 md:pt-0 pt-14 right-0 top-full size-full fixed md:border-l md:border-gray-300 bg-gray-50 transition-transform",
        )}
      >
        <aside className="xl:p-10 tablet:px-5 tablet:p-6 tablet:pt-6 md:pt-14 h-full">
          <ShopPreview wrapperClassName="h-full tablet:p-0 p-2" className="size-full" />
          <div className="md:block hidden">
            shop.next/luv2k@mail.ru
            <button type="button">Copy</button>
          </div>
        </aside>
      </div>
      <div className={clsx(isShowPreview && "translate-y-9", "fixed bottom-12 left-1/2 -translate-x-1/2 md:hidden block transition-transform")}>
        <Button left="eye" content={isShowPreview ? undefined : "Preview"} onClick={handleTogglePreview} />
      </div>
    </>
  );
};

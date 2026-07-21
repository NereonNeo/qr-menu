export const HeroSection = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 px-9 py-7 flex items-center justify-between gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-s font-gotham font-medium text-primary-400">Добрый день, Shopnext</span>
        <span className="text-xl font-gotham font-bold text-white">Вот что происходит сегодня</span>
        <div className="flex items-center gap-2">
          <span className="size-4 flex items-center justify-center">
            <span className="size-2 rounded-full bg-green-500" />
          </span>
          <span className="text-xs font-gotham font-medium text-gray-400">Меню активно · 42 стола онлайн</span>
        </div>
      </div>

      <div className="flex items-center gap-7">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-gotham font-medium text-gray-400">Выручка сегодня</span>
          <span className="text-xl font-gotham font-bold text-white">₽84 320</span>
          <span className="text-xs font-gotham font-semibold text-green-500">+12% к вчера</span>
        </div>

        <span className="w-px h-16 bg-white/10" />

        <div className="flex flex-col gap-1">
          <span className="text-xs font-gotham font-medium text-gray-400">Заказов сегодня</span>
          <span className="text-xl font-gotham font-bold text-white">247</span>
          <span className="text-xs font-gotham font-semibold text-green-500">+8%</span>
        </div>
      </div>
    </div>
  );
};

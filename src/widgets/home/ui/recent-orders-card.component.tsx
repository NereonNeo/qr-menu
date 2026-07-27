import { Badge } from "@/shared/ui/badge/badge.entry";
import { Button } from "@/shared/ui/button/button.entry";
import { Indicator } from "@/shared/ui/indicator/indicator.component";

import { HOME_ORDER_STATUS_META, HOME_RECENT_ORDERS } from "../home.const";

export const RecentOrdersCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-1 h-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <h2 className="text-m font-gotham font-semibold text-gray-900">Последние заказы</h2>
          <Badge
            rounded
            content="Live"
            sizeVariant="xs"
            colorVariant="green"
            className="font-bold!"
            leftNode={<Indicator sizeVariant="xs" color="green" />}
          />
        </div>
        <Button content="История" right="arrow-right" colorVariant="beige" sizeVariant="xs" />
      </div>

      {HOME_RECENT_ORDERS.map((order, index) => {
        const statusMeta = HOME_ORDER_STATUS_META[order.status];

        return (
          <div key={order.id}>
            {index > 0 && <div className="h-px bg-gray-100" />}
            <div className="flex items-center gap-3.5 py-3">
              <div className="size-11 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center shrink-0">
                <span className="text-s font-gotham font-bold text-gray-900">{order.id}</span>
              </div>

              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-s font-gotham font-semibold text-gray-900">{order.table}</span>
                  <span className="text-xs font-gotham text-gray-400">· {order.timeAgo}</span>
                </div>
                <span className="text-xs font-gotham text-gray-500 truncate">{order.items}</span>
              </div>

              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="text-s font-gotham font-bold text-gray-900">{order.sum}</span>
                <Badge content={statusMeta.label} colorVariant={statusMeta.colorVariant} sizeVariant="xs" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

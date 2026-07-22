import { useMemo } from "react";

import clsx from "clsx/lite";

import type { QrModuleStyle } from "../settings.contract";

const GRID_SIZE = 17;
const FINDER_CORNERS: [number, number][] = [
  [0, 0],
  [0, GRID_SIZE - 7],
  [GRID_SIZE - 7, 0],
];

const moduleShapeClassName: Record<QrModuleStyle, string> = {
  square: "rounded-none",
  rounded: "rounded-[30%]",
  dots: "rounded-full",
};

const finderCell = (row: number, col: number) => {
  const corner = FINDER_CORNERS.find(([cornerRow, cornerCol]) => row >= cornerRow && row < cornerRow + 7 && col >= cornerCol && col < cornerCol + 7);
  if (!corner) return null;

  const [cornerRow, cornerCol] = corner;
  const rowOffset = row - cornerRow;
  const colOffset = col - cornerCol;
  const ring = Math.min(rowOffset, 6 - rowOffset, colOffset, 6 - colOffset);
  return ring !== 1;
};

const createPattern = () => {
  let seed = 42;
  const random = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };

  return Array.from({ length: GRID_SIZE }, (_, row) => Array.from({ length: GRID_SIZE }, (_, col) => finderCell(row, col) ?? random() > 0.55));
};

interface IQrCodePreviewProps {
  size: number;
  color: string;
  background: string | null;
  moduleStyle: QrModuleStyle;
  showLogo?: boolean;
  logoLabel?: string;
  className?: string;
}

export const QrCodePreview = (props: IQrCodePreviewProps) => {
  const { size, color, background, moduleStyle, showLogo, logoLabel = "S", className } = props;

  const pattern = useMemo(() => createPattern(), []);

  return (
    <div className={clsx(className, "relative shrink-0")} style={{ width: size, height: size, backgroundColor: background ?? "transparent" }}>
      <div
        className="absolute inset-0 grid"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)` }}
      >
        {pattern.map((row, rowIndex) =>
          row.map((isFilled, colIndex) => (
            <span
              key={`${rowIndex}-${colIndex}`}
              className={moduleShapeClassName[moduleStyle]}
              style={{ backgroundColor: isFilled ? color : "transparent" }}
            />
          )),
        )}
      </div>

      {showLogo && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-[25%] border-white"
          style={{ width: size * 0.2, height: size * 0.2, backgroundColor: color, borderWidth: Math.max(2, size * 0.014) }}
        >
          <span className="font-kodchasan font-bold text-white" style={{ fontSize: size * 0.09 }}>
            {logoLabel}
          </span>
        </div>
      )}
    </div>
  );
};

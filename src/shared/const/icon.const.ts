import { FunctionComponent } from "react";

import {
  Bolt,
  Box,
  ChartColumnIncreasing,
  Check,
  ChevronDown,
  CircleAlert,
  CloudUpload,
  Eye,
  Layers,
  LayoutList,
  Loader,
  MonitorCog,
  Plus,
  Share,
  Store,
  Trash,
  X,
} from "lucide-react";

import Logo from "../assets/icons/logo.svg?react";

export const iconListComponents = {
  box: Box,
  eye: Eye,
  bolt: Bolt,
  logo: Logo,
  shop: Store,
  check: Check,
  share: Share,
  trash: Trash,
  loader: Loader,
  "monitor-cog": MonitorCog,
  plus: Plus,
  layers: Layers,
  "layout-list": LayoutList,
  "alert-circle": CircleAlert,
  "chevron-down": ChevronDown,
  "cloud-upload": CloudUpload,
  "chart-column-increasing": ChartColumnIncreasing,
  x: X,
} as const satisfies Record<string, FunctionComponent<React.RefAttributes<SVGSVGElement>>>;

export type IconNameTypes = keyof typeof iconListComponents;

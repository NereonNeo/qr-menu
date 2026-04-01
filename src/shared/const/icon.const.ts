import { FunctionComponent } from "react";

import { Bolt, Box, ChartColumnIncreasing, Check, CircleAlert, CloudUpload, Eye, Loader, MonitorCog, Share, Store, Trash } from "lucide-react";

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
  "alert-circle": CircleAlert,
  "chart-column-increasing": ChartColumnIncreasing,
  "cloud-upload": CloudUpload,
} as const satisfies Record<string, FunctionComponent<React.RefAttributes<SVGSVGElement>>>;

export type IconNameTypes = keyof typeof iconListComponents;

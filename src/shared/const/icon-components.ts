import { Bolt, Box, ChartColumnIncreasing, Check, CircleAlert, CloudUpload, Eye, Loader, MonitorCog, Share, Store, Trash } from "lucide-react";
import { FunctionComponent } from "react";
import Logo from "../assets/icons/logo.svg?react";
import { IconNameTypes } from "../types/icon-name-types";

export const iconListComponents: Record<IconNameTypes, FunctionComponent<React.RefAttributes<SVGSVGElement>>> = {
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
};

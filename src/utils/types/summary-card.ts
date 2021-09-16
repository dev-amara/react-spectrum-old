import { PaperProps } from "@material-ui/core";

export interface SummaryCardProps extends PaperProps {
  title: string;
  currency?: string;
  date: Date | string;
  amount?: number;
  elevation?: number;
}

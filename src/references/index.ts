import truncate from "lodash/truncate";
import { STATUS } from "../utils/enums/status";
import { TruncateOptions } from "../utils/types";

export function getStatusLabel(status: string): string {
  switch (status) {
    case STATUS.CONNECTED:
      return "Connecté";
      break;
    case STATUS.CUSTOMIZED:
      return "Customisé";
    default:
      return "";
      break;
  }
}

export function truncateText(
  content: any,
  options: TruncateOptions = { length: 20, omission: "..." },
): string {
  return truncate(content as string, options);
}

export function transformText(text: any, length?: number): string {
  return ["", undefined].includes(text as string)
    ? "N/A"
    : truncateText(
        text,
        length ? { length, omission: "..." } : { length: 20, omission: "..." },
      );
}

import { formatDistanceToNow } from "date-fns";

const formatDateToNaw = (data) => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

export default formatDateToNaw;

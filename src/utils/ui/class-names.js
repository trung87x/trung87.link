/**
 * Ghép nối các tên class CSS và tự động loại bỏ các giá trị Falsy (false, null, undefined, "").
 * * VÍ DỤ:
 * - Ghép thẳng:   classNames("btn", "btn-blue")             -> "btn btn-blue"
 * - Logic TRUE:   classNames("p-4", true && "bg-red")       -> "p-4 bg-red"
 * - Logic FALSE:  classNames("p-4", false && "bg-red")      -> "p-4"
 * - Loại bỏ lỗi:  classNames("flex", null, undefined, "g-2") -> "flex g-2"
 */

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

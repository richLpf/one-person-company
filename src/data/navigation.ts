export interface NavLink {
  label: string;
  url: string;
  isAnchor?: boolean;
}

export const navigationLinks: NavLink[] = [
  { label: "首页", url: "/" },
  { label: "我的产品", url: "/works" },
  { label: "关于我", url: "/#about", isAnchor: true },
  { label: "联系我", url: "/#contact", isAnchor: true }
];

export const callToAction = {
  label: "找我合作",
  url: "/#contact"
};

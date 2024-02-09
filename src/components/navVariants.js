export const topVariants = {
  opened: {
    rotate: 45,
  },
  closed: {
    rotate: 0,
  },
};
export const centerVariants = {
  opened: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
  },
};

export const bottomVariants = {
  opened: {
    rotate: -45,
  },
  closed: {
    rotate: 0,
  },
};

export const listVariants = {
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    x: "100vw",
  },
};

export const listItemVariant = {
  opened: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -10,
    opacity: 0,
  },
};

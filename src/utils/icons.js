import icons from '../configurations/icons';

export const getMatchingIcon = (tech) => {
  const matchingIcon = icons.find(
    (icon) => icon.name.toLowerCase() === tech.toLowerCase()
  );
  return matchingIcon;
};

export const getColor = (tech, defaultColor = '#f8f9fa') => {
  const matchingIcon = getMatchingIcon(tech);
  return matchingIcon && matchingIcon.color ? matchingIcon.color : defaultColor;
};

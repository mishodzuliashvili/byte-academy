import Avatar from "boring-avatars";

import twConfig from "../../../tailwind.config";
type ProfilePictureProps = {
  size: number;
  name: string;
};

export default function ProfilePicture({
  name,
  size = 40,
}: ProfilePictureProps) {
  // get color from tailwind config
  const primaryColor = twConfig.theme.extend.colors.primary.DEFAULT;
  const secondaryColor = twConfig.theme.extend.colors.secondary.DEFAULT;
  const ternaryColor = twConfig.theme.extend.colors.ternary.DEFAULT;
  return (
    <Avatar
      size={size}
      name={name}
      variant="beam"
      colors={[ternaryColor, primaryColor]}
    />
  );
}

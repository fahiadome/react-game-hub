import noImage from '../../assets/images/no-image-placeholder.webp';
/**
 * Get the cropped image URL from the given image URL.
 * @param imageUrl - The image URL to get the cropped image URL from.
 * @returns The cropped image URL.
 */

const getCroppedImageUrl = (imageUrl: string) => {
  if (!imageUrl) return noImage;
  const target = 'media/';
  const index = imageUrl.indexOf(target) + target.length;
  return imageUrl.slice(0, index) + 'crop/600/400/' + imageUrl.slice(index);
};

export default getCroppedImageUrl;

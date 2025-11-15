import bullsEye from '../../assets/Emojis/bulls-eye.webp';
import thumbsUp from '../../assets/Emojis/thumbs-up.webp';
import meh from '../../assets/Emojis/meh.webp';
import { Image, type ImageProps } from '@chakra-ui/react';

const Emoji = ({ rating }: { rating: number }) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'Recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'Exceptional', boxSize: '35px' },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;

import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import { AnimateSharedLayout } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';

function ProjectImage({ name, image, description, repo, app }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <AnimateSharedLayout type='crossfade'>
      <Image src={image} fluid />
    </AnimateSharedLayout>
  );
}

export default ProjectImage;

<AnimateSharedLayout type='crossfade'>
  {items.map(item => (
    <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
    </motion.div>
  ))}

  <AnimatePresence>
    {selectedId && (
      <motion.div layoutId={selectedIdentifier}>
        <motion.h5>{item.subtitle}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
        <motion.button onClick={() => setSelectedId(null)} />
      </motion.div>
    )}
  </AnimatePresence>
</AnimateSharedLayout>;

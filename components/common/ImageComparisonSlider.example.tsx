// Example usage of ImageComparisonSlider component

import ImageComparisonSlider from './ImageComparisonSlider';

export function ExampleUsage() {
  return (
    <div className="container py-20">
      <h2 className="text-2xl font-bold mb-8">Before & After Comparison</h2>
      
      {/* Basic Usage */}
      <ImageComparisonSlider
        beforeImage="/images/before.jpg"
        afterImage="/images/after.jpg"
        alt="Website Redesign"
      />

      {/* Custom Colors */}
      <ImageComparisonSlider
        beforeImage="/images/wireframe.jpg"
        afterImage="/images/final-design.jpg"
        alt="Design Evolution"
        className="mt-10"
        dividerColor="#6766FF"
        circleColor="#6766FF"
        arrowColor="#ffffff"
      />

      {/* Using with project data (like in ProjectBranding) */}
      {/* 
      <ImageComparisonSlider
        beforeImage={project?.data?.wireframeImages[0]}
        afterImage={project?.data?.wireframeImages[1]}
        alt={project?.data?.title}
        className="mt-16"
      />
      */}
    </div>
  );
}

/**
 * USAGE INSTRUCTIONS:
 * 
 * 1. Import the component:
 *    import ImageComparisonSlider from '@/components/common/ImageComparisonSlider';
 * 
 * 2. Use it with your images:
 *    <ImageComparisonSlider
 *      beforeImage="/path/to/before.jpg"
 *      afterImage="/path/to/after.jpg"
 *      alt="Description"
 *    />
 * 
 * 3. Customize colors (optional):
 *    dividerColor="#ffffff"   - Color of the vertical line
 *    circleColor="#ffffff"    - Background color of circles
 *    arrowColor="#000000"     - Color of the arrow icons
 * 
 * FEATURES:
 * - Hover to reveal the divider
 * - Move mouse to slide and compare images
 * - Responsive design with rounded corners
 * - Smooth transitions and shadows
 * - Three circles: top, center (larger), and bottom
 * - Each circle contains left and right arrows
 */

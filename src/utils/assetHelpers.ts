/**
 * Helper function to get the correct public asset URL
 */
export const getAssetPath = (relativePath: string): string => {
  // Remove leading slash if present
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  
  // For development
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // For production - use absolute path
  return `${window.location.origin}/${cleanPath}`;
};

/**
 * Helper function specifically for video assets
 */
export const getVideoUrl = (relativePath: string): string => {
  // Remove 'Public/Videos/' prefix if present
  const cleanPath = relativePath.replace(/^Public\/videos\//, '');
  return getAssetPath(`videos/${cleanPath}`);
};

/**
 * Helper function specifically for image assets
 */
export const getImageUrl = (relativePath: string): string => {
  // Remove 'Public/Images/' prefix if present
  const cleanPath = relativePath.replace(/^Public\/images\//, '');
  return getAssetPath(`images/${cleanPath}`);
};

/**
 * Helper function to check if asset exists
 */
export const checkAssetExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
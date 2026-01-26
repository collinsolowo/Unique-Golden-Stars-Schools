import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import galleryData from '../data/gallery.json';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryData.gallery[0] | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(galleryData.gallery.map(item => item.category)))];

  const filteredGallery = filter === 'all'
    ? galleryData.gallery
    : galleryData.gallery.filter(item => item.category === filter);

  const openLightbox = (image: typeof galleryData.gallery[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredGallery.findIndex(item => item.id === selectedImage.id);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredGallery.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredGallery.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredGallery[newIndex]);
  };

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore our gallery of photos and videos showcasing life at Unique Golden Stars Schools."
      />

      {/* Page Header */}
      <section className="py-20 bg-muted/30">
        <div className="section-padding">
          <div className="container-wide">
            <Breadcrumbs items={[{ label: 'Gallery' }]} className="mb-6" />
            <h1 className="text-4xl font-bold text-slate mb-4">
              Gallery
            </h1>
            <p className="text-lg text-slate-light max-w-2xl">
              Take a visual journey through our vibrant school community. Explore photos and videos 
              of our events, activities, and daily life at Golden Stars.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-muted">
        <div className="section-padding">
          <div className="container-wide">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    filter === category
                      ? 'bg-primary text-slate'
                      : 'bg-muted text-slate hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGallery.map((item, index) => (
                <AnimateOnScroll key={item.id} animation="fade-up" delay={(index % 8 + 1) * 50}>
                  <div
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate/0 group-hover:bg-slate/60 transition-colors flex items-center justify-center">
                      {item.type === 'video' ? (
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="w-5 h-5 text-slate" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <ChevronRight className="w-5 h-5 text-slate" />
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">{item.title}</p>
                      <p className="text-white/70 text-xs">{item.category}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {filteredGallery.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-light text-lg">
                  No images found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl max-h-[80vh] mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.description}</p>
              <p className="text-white/50 text-sm mt-2">
                {new Date(selectedImage.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

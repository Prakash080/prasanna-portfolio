"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
  isYouTube?: boolean
  youtubeId?: string
  className?: string
  aspectRatio?: string
}

export function VideoPlayer({
  src,
  poster,
  title,
  isYouTube = false,
  youtubeId,
  className = "",
  aspectRatio = "16/9",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Default to muted for better UX
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle video loading
  useEffect(() => {
    const video = videoRef.current
    if (!video || isYouTube) return

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)

    // Preload metadata only to improve initial load time
    video.preload = "metadata"

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [isYouTube])

  // Handle progress updates
  useEffect(() => {
    const video = videoRef.current
    if (!video || isYouTube) return

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100)
      }
    }

    const handleVideoEnd = () => {
      setIsPlaying(false)
      video.currentTime = 0
      setProgress(0)
    }

    video.addEventListener("timeupdate", updateProgress)
    video.addEventListener("ended", handleVideoEnd)

    return () => {
      video.removeEventListener("timeupdate", updateProgress)
      video.removeEventListener("ended", handleVideoEnd)
    }
  }, [isYouTube])

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const togglePlay = () => {
    if (isYouTube) return // YouTube controls handled by iframe

    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      // Create a promise to handle autoplay restrictions
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
            setIsPlaying(true)
          })
          .catch((error) => {
            // Autoplay was prevented
            console.log("Autoplay prevented:", error)
            // Unmute and try again if it was an autoplay restriction
            if (isMuted) {
              setIsMuted(false)
              video.muted = false
              video
                .play()
                .then(() => setIsPlaying(true))
                .catch((e) => console.log("Still couldn't play:", e))
            }
          })
      }
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (isYouTube) return // YouTube controls handled by iframe

    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    if (isYouTube) return // YouTube controls handled by iframe

    const container = containerRef.current
    if (!container) return

    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  // For YouTube videos
  if (isYouTube && youtubeId) {
    return (
      <div className={`relative rounded-lg overflow-hidden shadow-lg ${className}`} style={{ aspectRatio }}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&autoplay=0&mute=1`}
          title={title || "YouTube Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy" // Add lazy loading for iframes
        ></iframe>
      </div>
    )
  }

  // For regular videos
  return (
    <div
      ref={containerRef}
      className={`relative rounded-lg overflow-hidden shadow-lg group ${className}`}
      style={{ aspectRatio }}
    >
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        onClick={togglePlay}
        muted={isMuted}
        playsInline // Better for mobile
        preload="metadata" // Only preload metadata for faster initial load
        onLoadedData={() => setIsLoaded(true)}
      />

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="text-white bg-gold/80 hover:bg-gold p-2 rounded-full"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className="text-white hover:text-gold"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleFullscreen}
            className="text-white hover:text-gold"
          >
            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/30 mt-3 rounded-full overflow-hidden">
          <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Play Button Overlay (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="bg-gold/80 hover:bg-gold text-white p-6 rounded-full"
          >
            <Play className="h-8 w-8" />
          </motion.button>
        </div>
      )}

      {/* Video Title */}
      {title && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4">
          <h3 className="text-white font-serif text-lg">{title}</h3>
        </div>
      )}
    </div>
  )
}

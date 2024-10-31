/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: './dist', // Changes the build output directory to `./dist/`.
    images: {
        unoptimized: true // Disables image optimization for static export
    }
  }
   
  export default nextConfig
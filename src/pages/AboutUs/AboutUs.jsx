import storyImg from '../../../src/assets/aboutimg.jpg'

const AboutUs = () => {
    return (
        <div className='my-12'>
        <div className="text-center">
          <h2 className="text-4xl font-bold">Who We Are</h2>
        </div>
        <div className="grid md:grid-cols-2 mt-8">
          <div className='flex flex-col justify-center items-center text-center px-4'>
          
            <p className="text-3xl font-semibold mt-1">Inspiring Culinary Creativity</p>
            <p className="font-semibold mt-3">At Cuisine Oasis, we bring food enthusiasts together to share, discover, and celebrate recipes from around the world. Join our vibrant community to showcase your culinary creations and find inspiration for your next delicious meal.</p>
          </div>
          <div className='px-2'>
            <img className='rounded-md' src={storyImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
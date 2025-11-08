import React from 'react';
import { ChevronDown, Search, Calendar, Clock, Award, ArrowRight, ArrowUp, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ProgramUSPSection from './ProgramUSPSection';
import ProgramValue from './ProgramValue';
import CourseCurriculum from './CourseCurriculum';
import LiveIndustryProjects from './LiveIndustryProjects';
import CareerServices from './CareerServices';
import AdmissionProcess from './AdmissionProcess';
import AcademicPartners from './AcademicPartners';
import AlumniCompanies from './AlumniCompanies';
import FacultiesSection from './FacultiesSection';
import AlumniTestimonials from './AlumniTestimonials';
import CourseOverview from './CourseOverview';
import CareerOpportunities from './CareerOpportunities';
import WhoShouldDoProgram from './WhoShouldDoProgram';
import SkillsMaster from './SkillsMaster';
import ToolsLearn from './ToolsLearn';
import DataScienceLanding from './DataScienceLanding';
import CertificationSection from './CertificationSection';
import FAQSection from './FAQSection';
import ProgramFeeSection from './ProgramFeeSection';

export default function IoTAcademyPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const programs = [
        { name: "AI & Machine Learning", description: "Become an AI expert" },
        { name: "Data Science", description: "Master data analysis" },
        { name: "IoT & Embedded Systems", description: "Build connected devices" },
        { name: "Cybersecurity", description: "Protect digital assets" },
        { name: "Cloud Computing", description: "Master cloud technologies" },
        { name: "Blockchain", description: "Learn decentralized systems" }
    ];

    const resources = [
        { name: "E-books", description: "Download free learning materials" },
        { name: "Tutorials", description: "Step-by-step guides" },
        { name: "Case Studies", description: "Real-world projects" },
        { name: "Webinars", description: "Live learning sessions" },
        { name: "Research Papers", description: "Latest tech research" },
        { name: "Tools & Software", description: "Essential development tools" }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log(`Searching for: ${searchQuery}`);
            // Add actual search logic here
            setSearchQuery('');
            setIsSearchOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="border-4 border-blue-900 rounded-full p-2 sm:p-3 relative">
                                <div className="text-blue-900 font-bold text-center leading-tight">
                                    <div className="text-xs sm:text-sm">The IoT</div>
                                    <div className="text-base sm:text-lg">Academy</div>
                                </div>
                                <div className="text-[10px] sm:text-xs text-blue-900 absolute -bottom-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-1">
                                    Connecting the Unconnected
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Navigation Menu - Desktop */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 relative">
                            {/* Programs Dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center gap-1 text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base"
                                    onClick={() => {
                                        setIsProgramsOpen(!isProgramsOpen);
                                        setIsResourcesOpen(false);
                                    }}
                                >
                                    Programs <ChevronDown size={16} />
                                </button>

                                {isProgramsOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 mb-3">Our Programs</h3>
                                            <div className="space-y-2">
                                                {programs.map((program, index) => (
                                                    <button
                                                        key={index}
                                                        className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200"
                                                        onClick={() => {
                                                            console.log(`Selected: ${program.name}`);
                                                            setIsProgramsOpen(false);
                                                        }}
                                                    >
                                                        <div className="font-medium text-gray-900">{program.name}</div>
                                                        <div className="text-sm text-gray-600">{program.description}</div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Resources Dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center gap-1 text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base"
                                    onClick={() => {
                                        setIsResourcesOpen(!isResourcesOpen);
                                        setIsProgramsOpen(false);
                                    }}
                                >
                                    Resources <ChevronDown size={16} />
                                </button>

                                {isResourcesOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 mb-3">Learning Resources</h3>
                                            <div className="space-y-2">
                                                {resources.map((resource, index) => (
                                                    <button
                                                        key={index}
                                                        className="w-full text-left p-3 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200"
                                                        onClick={() => {
                                                            console.log(`Selected: ${resource.name}`);
                                                            setIsResourcesOpen(false);
                                                        }}
                                                    >
                                                        <div className="font-medium text-gray-900">{resource.name}</div>
                                                        <div className="text-sm text-gray-600">{resource.description}</div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium text-sm lg:text-base">
                                Blog
                            </a>

                            {/* Search */}
                            <div className="relative">
                                {isSearchOpen ? (
                                    <form onSubmit={handleSearch} className="flex items-center">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search courses, resources..."
                                            className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            autoFocus
                                        />
                                        <button
                                            type="submit"
                                            className="ml-2 bg-blue-900 text-white p-2 rounded hover:bg-blue-800 transition-colors"
                                        >
                                            <Search size={18} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsSearchOpen(false);
                                                setSearchQuery('');
                                            }}
                                            className="ml-2 text-gray-500 hover:text-gray-700"
                                        >
                                            <X size={18} />
                                        </button>
                                    </form>
                                ) : (
                                    <button
                                        className="bg-blue-900 text-white p-2 rounded hover:bg-blue-800 transition-colors"
                                        onClick={() => setIsSearchOpen(true)}
                                    >
                                        <Search size={18} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* CTA Buttons - Desktop */}
                        <div className="hidden md:flex items-center gap-3 lg:gap-4">
                            <button className="bg-blue-900 text-white px-4 lg:px-6 py-2 rounded font-semibold hover:bg-blue-800 transition-colors text-sm lg:text-base">
                                Explore Programs
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-4 lg:px-6 py-2 rounded font-semibold hover:border-blue-900 hover:text-blue-900 transition-colors text-sm lg:text-base">
                                Login
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-4 pt-4">
                                {/* Mobile Programs Dropdown */}
                                <div className="relative">
                                    <button
                                        className="flex items-center justify-between w-full text-gray-700 hover:text-blue-900 font-medium py-2"
                                        onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                                    >
                                        Programs <ChevronDown size={16} className={`transform transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isProgramsOpen && (
                                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                                            {programs.map((program, index) => (
                                                <button
                                                    key={index}
                                                    className="block w-full text-left p-2 hover:bg-blue-50 rounded transition-colors text-sm"
                                                    onClick={() => {
                                                        console.log(`Mobile Selected: ${program.name}`);
                                                        setIsProgramsOpen(false);
                                                        setIsMenuOpen(false);
                                                    }}
                                                >
                                                    <div className="font-medium text-gray-900">{program.name}</div>
                                                    <div className="text-xs text-gray-600">{program.description}</div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Resources Dropdown */}
                                <div className="relative">
                                    <button
                                        className="flex items-center justify-between w-full text-gray-700 hover:text-blue-900 font-medium py-2"
                                        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                                    >
                                        Resources <ChevronDown size={16} className={`transform transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isResourcesOpen && (
                                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                                            {resources.map((resource, index) => (
                                                <button
                                                    key={index}
                                                    className="block w-full text-left p-2 hover:bg-blue-50 rounded transition-colors text-sm"
                                                    onClick={() => {
                                                        console.log(`Mobile Selected: ${resource.name}`);
                                                        setIsResourcesOpen(false);
                                                        setIsMenuOpen(false);
                                                    }}
                                                >
                                                    <div className="font-medium text-gray-900">{resource.name}</div>
                                                    <div className="text-xs text-gray-600">{resource.description}</div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <a href="#" className="text-gray-700 hover:text-blue-900 font-medium py-2">
                                    Blog
                                </a>

                                {/* Mobile Search */}
                                <form onSubmit={handleSearch} className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search..."
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-900 text-white p-2 rounded hover:bg-blue-800 transition-colors"
                                    >
                                        <Search size={16} />
                                    </button>
                                </form>

                                <div className="flex items-center gap-3 pt-2">
                                    <button className="bg-blue-900 text-white px-6 py-2.5 rounded font-semibold hover:bg-blue-800 transition-colors flex-1">
                                        Explore Programs
                                    </button>
                                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-2.5 rounded font-semibold hover:border-blue-900 hover:text-blue-900 transition-colors flex-1">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <section className="bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute right-0 top-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-orange-400 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute right-10 sm:right-20 bottom-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-orange-400 rounded-full opacity-20 transform translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Content */}
                        <div className="text-white space-y-4 sm:space-y-6">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight">
                                Professional Program In <span className="text-orange-400 block sm:inline">Data Science, Machine Learning, AI & GenAI</span>
                            </h1>

                            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                                Boost your career with a practical course in Data Science, Machine Learning, and Artificial Intelligence by E&ICT Academy, IIT Roorkee. This course is great for beginners and professionals who want to learn more about AI. You'll learn how to analyze data, create visuals, as well as understand new tech trends in a simple and supportive way. Join now to explore exciting career opportunities in technology!
                            </p>

                            {/* Ratings */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-xl sm:text-2xl">★</span>
                                        ))}
                                    </div>
                                    <span className="text-white font-semibold text-sm sm:text-base">4.7 / 4522 votes</span>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                                    <div className="flex items-center gap-1">
                                        <span className="text-xl sm:text-2xl font-bold">G</span>
                                        <span className="text-white text-sm sm:text-base">4.8/5</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-red-500 text-lg sm:text-xl">⭐</span>
                                        <span className="text-white text-sm sm:text-base">4.9/5</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-blue-400 text-lg sm:text-xl">f</span>
                                        <span className="text-white text-sm sm:text-base">4.7/5</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-green-400 text-lg sm:text-xl">★</span>
                                        <span className="text-white text-sm sm:text-base">4.5/5</span>
                                    </div>
                                </div>
                            </div>

                            {/* Subtitle */}
                            <div className="pt-2 sm:pt-4">
                                <p className="text-lg sm:text-xl text-gray-200">
                                    Gain Expertise in Advanced Generative AI and LLM Technologies
                                </p>
                            </div>

                            {/* Course Info */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 pt-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="text-orange-400" size={28} />
                                    <div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Next Cohort</div>
                                        <div className="text-white font-bold text-base sm:text-lg">10 Apr 2025</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Award className="text-orange-400" size={28} />
                                    <div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Admission Deadline</div>
                                        <div className="text-white font-bold text-base sm:text-lg">10 Apr 2025</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="text-orange-400" size={28} />
                                    <div>
                                        <div className="text-gray-300 text-xs sm:text-sm">Duration</div>
                                        <div className="text-white font-bold text-base sm:text-lg">10 Months</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                                <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg text-sm sm:text-base">
                                    Download Brochure
                                    <ArrowRight size={18} />
                                </button>
                                <button className="bg-white hover:bg-gray-100 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg text-sm sm:text-base">
                                    Enroll Now
                                    <ArrowUp size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Image Card */}
                        <div className="relative lg:mt-8">
                            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden transform lg:translate-y-8">
                                <img
                                    src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop"
                                    alt="IIT Roorkee Building"
                                    className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                                />
                                <div className="p-4 sm:p-6 flex items-center justify-center">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">eict</span>
                                        <div className="text-xs sm:text-sm text-gray-600">IIT Roorkee</div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative dots - Hidden on mobile */}
                            <div className="hidden lg:block absolute -right-4 top-1/4 space-y-2">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose This Program?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
                            {/* Feature cards */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">Industry Relevant Curriculum</h3>
                                <p className="text-gray-600 text-sm sm:text-base">Learn the latest tools and technologies used in the industry</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">Expert Faculty</h3>
                                <p className="text-gray-600 text-sm sm:text-base">Learn from IIT Roorkee professors and industry experts</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">Career Support</h3>
                                <p className="text-gray-600 text-sm sm:text-base">Get placement assistance and career guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Generative AI & LLMs Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
                        Integrated with <span className="text-orange-400">Generative AI & LLMs</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Side - Content Cards */}
                        <div className="space-y-6">
                            {/* Card 1 */}
                            <div className="bg-blue-100 border-2 border-blue-900 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                    Generative AI Modules & Architecture
                                </h3>
                                <p className="text-gray-700 text-base sm:text-lg">
                                    Understand transformers, diffusion models, and AI pipelines powering text, image, and video generation.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-blue-900 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                    Generative AI Tools & Case Studies
                                </h3>
                                <p className="text-gray-700 text-base sm:text-lg">
                                    Explore ChatGPT, Midjourney, and AI copilots with real-world success stories.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-blue-900 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                    Building LLM Applications
                                </h3>
                                <p className="text-gray-700 text-base sm:text-lg">
                                    Learn to fine-tune models, deploy APIs, and create AI-driven solutions.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Image Grid */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {/* Top Left Image */}
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105">
                                <img
                                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
                                    alt="Laptop with code"
                                    className="w-full h-48 sm:h-64 object-cover"
                                />
                            </div>

                            {/* Top Right Image */}
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105 bg-gradient-to-br from-purple-900 to-blue-900">
                                <img
                                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop"
                                    alt="AI Technology"
                                    className="w-full h-48 sm:h-64 object-cover"
                                />
                            </div>

                            {/* Center AI Chip Icon */}
                            <div className="col-span-2 flex justify-center -my-8 z-10">
                                <div className="bg-white rounded-2xl p-6 shadow-2xl border-4 border-gray-100 hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <div className="relative">
                                        <div className="text-6xl font-bold text-blue-900 flex items-center justify-center">
                                            AI
                                        </div>
                                        {/* Circuit lines */}
                                        <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-blue-900"></div>
                                        <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-blue-900"></div>
                                        <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-blue-900"></div>
                                        <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-blue-900"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Left Image */}
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105">
                                <img
                                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop"
                                    alt="AI Brain"
                                    className="w-full h-48 sm:h-64 object-cover"
                                />
                            </div>

                            {/* Bottom Right Image */}
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105">
                                <img
                                    src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=600&h=400&fit=crop"
                                    alt="AI Innovation"
                                    className="w-full h-48 sm:h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProgramUSPSection />

            <AcademicPartners />

            <CourseOverview />

            <SkillsMaster />

            <ToolsLearn />

            <ProgramValue />

            <CourseCurriculum />

            <LiveIndustryProjects />

            <CertificationSection />

            <FacultiesSection />

            <AlumniCompanies />

            <CareerOpportunities />

            <CareerServices />

            <WhoShouldDoProgram />

            <AdmissionProcess />

            <ProgramFeeSection />

            <AlumniTestimonials />

            <DataScienceLanding />

            <FAQSection />

        </div>
    );
}

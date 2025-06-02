import { Code, Trees, GraduationCap, FolderKanban, Wrench } from "lucide-react";

const skills = ["Python", "JavaScript", "Java", "C++", "HTML/CSS", "SQL", "PostgreSQL", "MongoDB", "React.js", "Flask","AWS", "Git/Github", "Docker"];

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">

                        <p className="text-muted-foreground text-gray-900 text-left">
                        I'm a junior Software Engineer who enjoys building full-stack web applications with modern tools, 
                        and I've explored system scalability, performance, architecture, and testing.
                        </p>
                    

                        <div className="text-muted-foreground text-gray-900 text-left">
                            <div className="flex items-center gap-2 text-2xl font-semibold text-gray-900 text-left">
                                <GraduationCap className="h-6 w-6 text-primary" />
                                <span>Education</span>
                            </div>
                            <h5 className="text-1xl font-semibold text-gray-700">
                                - Master of Computer Science
                            </h5>
                            <p className="text-gray-500">University of Illinois at Urbana-Champaign</p>
                            <p className="text-gray-500">Champaign, IL    (2024)</p>

                            <h5 className="text-1xl font-semibold text-gray-700">
                                - Bachelor of Landscape Architecture
                            </h5>
                            <p className="text-gray-500">SUNY College of Environmental Science and Forestry</p>
                            <p className="text-gray-500">Syracuse, NY       (2015)</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 text-2xl font-semibold text-gray-900 text-left">
                                <Wrench className="h-6 w-6 text-primary" />
                                <span>Skills</span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-gray-800 text-sm">
                                {skills.map((skill) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        key={skill}>{skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-center gap-2 text-2xl font-semibold text-gray-900 text-left">
                            <FolderKanban className="h-6 w-6 text-primary" />
                            <span>Wrok Experience</span>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Developed and enhanced a full-stack web platform using Python Flask, React.js, PostgreSQL, and AWS. 
                                        Gained hands-on experience in backend API design, frontend integration, and feature deployment. 
                                        Worked with RESTful APIs, testing frameworks, version control, and cloud services to deliver a scalable and user-friendly application
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Trees className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Landscape Architecture Design</h4>
                                    <p className="text-muted-foreground">
                                        Started as a landscape designer and transitioned into a project manager, 
                                        leading design teams from design concept through construction. 
                                        This experience strengthened my problem-solving and analytical skills, 
                                        which now inform my work in software development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
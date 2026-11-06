import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import resumeData from '../../halit-egemen-keskin.json';

export default function Portfolio() {
  const data = resumeData as any;
  const { basics, summary, sections, picture } = data;
  const projects = (sections.projects.items || []).filter((p: any) => !p.hidden);

  const linkedinUrl = basics.customFields.find((f: any) => f.icon === 'linkedin-logo')?.link || '';
  const githubUrl = basics.customFields.find((f: any) => f.icon === 'github-logo')?.link?.trim() || '';

  const iconLinkClasses = "inline-flex shrink-0 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-medium transition-all size-9 shadow-sm";

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-24">
        
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">{basics.name}</h1>
              <h2 className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-medium">{basics.headline}</h2>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-zinc-400" />
                <span>{basics.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-zinc-400" />
                <a href={`mailto:${basics.email}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors underline-offset-4 hover:underline">{basics.email}</a>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-4 pt-2">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={iconLinkClasses} title="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              )}
              {linkedinUrl && (
                <a href={`https://${linkedinUrl}`} target="_blank" rel="noopener noreferrer" className={iconLinkClasses} title="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Avatar className="h-48 w-48 border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl relative">
              <AvatarImage src={picture.url} alt={basics.name} className="object-cover" />
              <AvatarFallback className="text-4xl bg-zinc-50 dark:bg-zinc-900">{basics.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* SUMMARY SECTION */}
        <section className="space-y-8">
          <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-bold border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">About</h3>
          <div 
            className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed prose prose-zinc dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: summary.content }}
          />
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="space-y-8">
          <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-bold border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">Experience</h3>
          <div className="space-y-12">
            {sections.experience.items.map((job: any) => (
              <div key={job.id} className="relative pl-0 md:pl-0">
                <div className="flex flex-col gap-2">
                   <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{job.position}</h4>
                    <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-500 font-mono">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400 font-medium flex items-center gap-2">
                    <span>{job.company}</span>
                    <span className="text-zinc-300 dark:text-zinc-700">•</span>
                    <span>{job.location}</span>
                  </div>
                  <div 
                    className="mt-4 text-zinc-600 dark:text-zinc-400 prose prose-zinc dark:prose-invert max-w-none prose-p:my-2 prose-ul:my-2 prose-li:my-1 prose-a:text-zinc-900 dark:prose-a:text-white prose-a:font-bold prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="space-y-8">
          <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-bold border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">Featured Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project: any) => (
              <Card key={project.id} className="group border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-zinc-400">{project.period}</span>
                    {project.website?.url && (
                      <a href={project.website.url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono flex items-center gap-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <Github className="h-3 w-3" /> {(project.website.label || 'CODE').toUpperCase()}
                      </a>
                    )}
                  </div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(project.keywords || []).map((keyword: string) => (
                      <Badge key={keyword} variant="secondary" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-none font-mono text-[10px]">
                        {keyword.toUpperCase()}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {githubUrl && (
            <p className="text-sm text-zinc-500 text-center">
              More on <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-white">GitHub</a>
            </p>
          )}
        </section>

        {/* SKILLS SECTION */}
        <section className="space-y-8">
          <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-bold border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.skills.items.map((skillGroup: any) => (
              <div key={skillGroup.id} className="space-y-4">
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-tight">{skillGroup.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.keywords.map((skill: string) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-24 pb-12 text-center border-t border-zinc-100 dark:border-zinc-900">
          <p className="text-sm text-zinc-400 font-mono">
            &copy; {new Date().getFullYear()} {basics.name.toUpperCase()} • BUILT WITH NEXT.JS
          </p>
        </footer>

      </div>
    </main>
  );
}

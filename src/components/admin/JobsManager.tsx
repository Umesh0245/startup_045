import React, { useState, useEffect } from 'react';
import { Briefcase, Plus, Trash, Globe, MapPin, Building2, Eye } from 'lucide-react';

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    isActive: boolean;
}

export default function JobsManager() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentJob, setCurrentJob] = useState<Partial<Job>>({});

    useEffect(() => {
        const stored = localStorage.getItem('synvoke_jobs');
        if (stored) {
            setJobs(JSON.parse(stored));
        } else {
            // Default sample job
            const initialJobs = [
                {
                    id: '1',
                    title: 'Senior Systems Architect',
                    department: 'Engineering',
                    location: 'Remote / Hyderabad',
                    type: 'Full-time',
                    description: 'We are looking for a hardened architect capable of designing enterprise-grade microservice backends that handle massive throughput with zero latency.',
                    isActive: true
                }
            ];
            setJobs(initialJobs);
            localStorage.setItem('synvoke_jobs', JSON.stringify(initialJobs));
        }
    }, []);

    const saveJobs = (newJobs: Job[]) => {
        setJobs(newJobs);
        localStorage.setItem('synvoke_jobs', JSON.stringify(newJobs));
    };

    const handleSaveJob = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentJob.title || !currentJob.department) return;

        let updatedList;
        if (currentJob.id) {
            updatedList = jobs.map(j => j.id === currentJob.id ? currentJob as Job : j);
        } else {
            const newJob = {
                ...currentJob,
                id: Date.now().toString(),
                isActive: true
            } as Job;
            updatedList = [...jobs, newJob];
        }

        saveJobs(updatedList);
        setIsEditing(false);
        setCurrentJob({});
    };

    const handleDelete = (id: string) => {
        saveJobs(jobs.filter(j => j.id !== id));
    };

    const toggleStatus = (id: string) => {
        saveJobs(jobs.map(j => j.id === id ? { ...j, isActive: !j.isActive } : j));
    };

    if (isEditing) {
        return (
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold font-display text-gray-900">{currentJob.id ? 'Edit System Role' : 'Deploy New Role'}</h2>
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-1">Talent Acquisition Matrix</p>
                    </div>
                </div>

                <form onSubmit={handleSaveJob} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Role Title</label>
                            <input type="text" required value={currentJob.title || ''} onChange={e => setCurrentJob({ ...currentJob, title: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Senior DevOps Engineer" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Department</label>
                            <input type="text" required value={currentJob.department || ''} onChange={e => setCurrentJob({ ...currentJob, department: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Core Engineering" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Location</label>
                            <input type="text" required value={currentJob.location || ''} onChange={e => setCurrentJob({ ...currentJob, location: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Remote / US" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Contract Type</label>
                            <select value={currentJob.type || 'Full-time'} onChange={e => setCurrentJob({ ...currentJob, type: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                <option>Full-time</option>
                                <option>Contract</option>
                                <option>Freelance</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Role Brief / Requirements</label>
                        <textarea required rows={6} value={currentJob.description || ''} onChange={e => setCurrentJob({ ...currentJob, description: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 line-clamp-none resize-none" placeholder="Describe the mission, the tech stack, and what it takes to join the collective..." />
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-indigo-500/20">
                            {currentJob.id ? 'Update Architecture Role' : 'Broadcast Live'}
                        </button>
                        <button type="button" onClick={() => { setIsEditing(false); setCurrentJob({}); }} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3.5 px-8 rounded-xl transition-all">
                            Abort
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div>
                    <h2 className="text-3xl font-display font-bold text-gray-900">Talent Architecture</h2>
                    <p className="text-gray-500 mt-2">Manage open requisitions. These slots are broadcasted directly to the public Community page.</p>
                </div>
                <button
                    onClick={() => setIsEditing(true)}
                    className="shrink-0 bg-gray-900 hover:bg-indigo-600 text-white flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-colors shadow-lg"
                >
                    <Plus className="w-4 h-4" /> Open New Requisition
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map(job => (
                    <div key={job.id} className={`bg-white rounded-3xl p-6 border transition-all ${job.isActive ? 'border-indigo-100 shadow-md shadow-indigo-500/5' : 'border-gray-100 opacity-60'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${job.isActive ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-gray-100 text-gray-500 border border-gray-200'}`}>
                                {job.isActive ? 'Active Pipeline' : 'Closed Array'}
                            </span>
                            <div className="flex gap-2">
                                <button onClick={() => { setCurrentJob(job); setIsEditing(true); }} className="p-2 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg text-gray-400 transition-colors">
                                    <Eye className="w-4 h-4" />
                                </button>
                                <button onClick={() => toggleStatus(job.id)} className="p-2 bg-gray-50 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-gray-400 transition-colors" title="Toggle Status">
                                    <Globe className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDelete(job.id)} className="p-2 bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-lg text-gray-400 transition-colors">
                                    <Trash className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold font-display text-gray-900 mb-4">{job.title}</h3>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Building2 className="w-4 h-4 text-indigo-400" /> {job.department}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <MapPin className="w-4 h-4 text-indigo-400" /> {job.location}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Briefcase className="w-4 h-4 text-indigo-400" /> {job.type}
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6">
                            {job.description}
                        </p>
                    </div>
                ))}

                {jobs.length === 0 && (
                    <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border border-gray-200 border-dashed">
                        <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-600 mb-2">No Open Roles</h3>
                        <p className="text-gray-500 max-w-sm mx-auto">The architecture team is full. Open a new requisition to recruit more engineers.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

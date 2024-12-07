'use client'

import {  UserIcon, Mail, BriefcaseIcon } from 'lucide-react'

interface UserProfile {
  id: number
  name: string
  email: string
  jobTitle: string
  profilePicture?: string // Optional for users without a profile picture
}

const userProfiles: UserProfile[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    jobTitle: 'Frontend Developer',
    profilePicture: '',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    jobTitle: 'Backend Engineer',
    profilePicture: '',
  },
  {
    id: 3,
    name: 'Michael Lee',
    email: 'michael.lee@example.com',
    jobTitle: 'UI/UX Designer',
    profilePicture: '',
  },
]

export default function ProfilesDisplayPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-black py-10 px-6">
      <div className="container mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Community</h1>
          <p className="text-muted-foreground mt-2">
            Meet the talented individuals who joined ZapMyJob.
          </p>
        </header>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {userProfiles.map((user) => (
            <div
              key={user.id}
              className="bg-card dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* User Avatar */}
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt={`${user.name}'s profile`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-primary">
                    <UserIcon className="w-8 h-8" />
                  </div>
                )}
                {/* User Name */}
                <div>
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.jobTitle}</p>
                </div>
              </div>
              {/* User Details */}
              <div className="text-sm">
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>{user.email}</span>
                </p>
                <p className="flex items-center space-x-2 mt-2">
                  <BriefcaseIcon className="w-4 h-4 text-primary" />
                  <span>{user.jobTitle}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import {
  BriefcaseIcon,
  ScrollIcon,
  UserCircleIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table'

const applicationData = [
  { month: 'Jan', applications: 4 },
  { month: 'Feb', applications: 7 },
  { month: 'Mar', applications: 5 },
  { month: 'Apr', applications: 8 },
  { month: 'May', applications: 12 },
  { month: 'Jun', applications: 6 },
]

const recentApplications = [
  {
    company: 'TechCorp',
    position: 'Senior Developer',
    date: '2024-02-28',
    status: 'Pending',
  },
  {
    company: 'InnovateLabs',
    position: 'Full Stack Engineer',
    date: '2024-02-27',
    status: 'Interview',
  },
  {
    company: 'DataSystems',
    position: 'Frontend Developer',
    date: '2024-02-26',
    status: 'Rejected',
  },
]

export default function JobTracker() {
  const [isComingSoon] = useState(true)

  return (
    <div className="relative min-h-screen w-full bg-background dark:bg-black flex flex-col justify-center items-center">
      {/* Main Dashboard Content */}
      <div className="container py-6 px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Track and manage your job applications
            </p>
          </div>
          <Button>+ New Application</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Applications
              </CardTitle>
              <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <ScrollIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +4% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Interviews
              </CardTitle>
              <UserCircleIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                +2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rejected</CardTitle>
              <ScrollIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                -1% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 pt-6 md:grid-cols-2 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Application Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={applicationData}>
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Bar
                    dataKey="applications"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentApplications.map((application) => (
                    <TableRow key={application.company}>
                      <TableCell className="font-medium">
                        {application.company}
                      </TableCell>
                      <TableCell>{application.position}</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {application.date}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${application.status === 'Pending'
                              ? 'bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400'
                              : application.status === 'Interview'
                                ? 'bg-green-500/20 text-green-700 dark:bg-green-500/10 dark:text-green-400'
                                : 'bg-red-500/20 text-red-700 dark:bg-red-500/10 dark:text-red-400'
                            }`}
                        >
                          {application.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Coming Soon Overlay */}
      {isComingSoon && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
            <p className="text-lg">Stay tuned for updates!</p>
          </div>

        </div>
      )}
    </div>
  )
}

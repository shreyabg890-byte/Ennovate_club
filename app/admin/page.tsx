"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Eye,
  LogOut,
  Search,
  Trash2,
  Users,
  X,
  Filter,
  Download,
} from "lucide-react"
import * as XLSX from "xlsx"
import { supabase } from "@/lib/supabase"

type Member = {
  id: number
  full_name: string
  usn: string
  branch: string
  year: string
  phone: string
  email: string
  skills: string
  interest_area: string
  department: string
  reason: string
  created_at: string
}

export default function AdminPage() {
  const router = useRouter()

  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")
  const [branchFilter, setBranchFilter] = useState("All")
  const [yearFilter, setYearFilter] = useState("All")
  const [departmentFilter, setDepartmentFilter] = useState("All")
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const [deletingId, setDeletingId] = useState<number | null>(null)

  useEffect(() => {
    checkAdmin()
  }, [])

  const checkAdmin = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      router.replace("/admin/login")
      return
    }

    fetchMembers()
  }

  const fetchMembers = async () => {
    setLoading(true)
    setError("")

    const { data, error } = await supabase
      .from("club_applications")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("FETCH ERROR:", error)
      setError(error.message)
      setLoading(false)
      return
    }

    setMembers(data || [])
    setLoading(false)
  }

  const handleDownloadExcel = () => {
    if (members.length === 0) {
      alert("No applications available to download.")
      return
    }

    const excelData = members.map((member) => ({
      "Full Name": member.full_name,
      "USN / Roll Number": member.usn,
      Branch: member.branch,
      Year: member.year,
      Phone: member.phone,
      Email: member.email,
      Skills: member.skills,
      "Core Area of Interest": member.interest_area,
      Department: member.department,
      "Reason for Joining": member.reason,
      "Application Date": formatDate(member.created_at),
    }))

    const worksheet = XLSX.utils.json_to_sheet(excelData)

    const workbook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Applications"
    )

    XLSX.writeFile(
      workbook,
      "Ennovate_Club_Applications.xlsx"
    )
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace("/admin/login")
  }

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this application?"
    )

    if (!confirmed) return

    setDeletingId(id)

    const { error } = await supabase
      .from("club_applications")
      .delete()
      .eq("id", id)

    if (error) {
      console.error("DELETE ERROR:", error)
      setError(error.message)
      setDeletingId(null)
      return
    }

    setMembers((prev) =>
      prev.filter((member) => member.id !== id)
    )

    if (selectedMember?.id === id) {
      setSelectedMember(null)
    }

    setDeletingId(null)
  }

  const branches = useMemo(() => {
    return Array.from(
      new Set(
        members
          .map((member) => member.branch)
          .filter(Boolean)
      )
    )
  }, [members])

  const years = useMemo(() => {
    return Array.from(
      new Set(
        members
          .map((member) => member.year)
          .filter(Boolean)
      )
    )
  }, [members])

  const departments = useMemo(() => {
    return Array.from(
      new Set(
        members
          .map((member) => member.department)
          .filter(Boolean)
      )
    )
  }, [members])

  const filteredMembers = useMemo(() => {
    const query = search.toLowerCase().trim()

    return members.filter((member) => {
      const matchesSearch =
        !query ||
        [
          member.full_name,
          member.usn,
          member.branch,
          member.year,
          member.email,
          member.phone,
          member.department,
          member.interest_area,
          member.skills,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query)

      const matchesBranch =
        branchFilter === "All" ||
        member.branch === branchFilter

      const matchesYear =
        yearFilter === "All" ||
        member.year === yearFilter

      const matchesDepartment =
        departmentFilter === "All" ||
        member.department === departmentFilter

      return (
        matchesSearch &&
        matchesBranch &&
        matchesYear &&
        matchesDepartment
      )
    })
  }, [
    members,
    search,
    branchFilter,
    yearFilter,
    departmentFilter,
  ])

  const clearFilters = () => {
    setSearch("")
    setBranchFilter("All")
    setYearFilter("All")
    setDepartmentFilter("All")
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const getCount = (
    field: keyof Member,
    value: string
  ) => {
    return members.filter(
      (member) => member[field] === value
    ).length
  }

  return (
    <main className="min-h-screen px-4 py-24 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-white">
              ENNOVATE CLUB
            </p>

            <h1 className="text-3xl font-bold text-white md:text-4xl">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-white/90">
              Manage club membership applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">

            {/* Download Excel */}
            <button
              onClick={handleDownloadExcel}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-medium transition hover:bg-muted hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Download Excel
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-medium transition hover:bg-muted"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>

          </div>
        </div>

        {/* Main Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Total Applications */}
          <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Total Applications
                </p>

                <p className="text-3xl font-bold">
                  {members.length}
                </p>
              </div>

            </div>
          </div>

          {/* Showing */}
          <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border">
                <Search className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Showing
                </p>

                <p className="text-3xl font-bold">
                  {filteredMembers.length}
                </p>
              </div>

            </div>
          </div>

          {/* Departments */}
          <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border">
                <Filter className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Departments
                </p>

                <p className="text-3xl font-bold">
                  {departments.length}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Department Statistics */}
        {!loading && members.length > 0 && (
          <div className="mb-8 rounded-2xl border border-border bg-background/80 p-6 shadow-lg backdrop-blur-md">

            <div className="mb-5">
              <h2 className="text-xl font-bold">
                Department Applications
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Number of students interested in each department.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {departments.map((department) => (
                <div
                  key={department}
                  className="rounded-xl border border-border p-4"
                >
                  <p className="text-sm text-muted-foreground">
                    {department}
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    {getCount("department", department)}
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Branch + Year Statistics */}
        {!loading && members.length > 0 && (
          <div className="mb-8 grid gap-6 lg:grid-cols-2">

            {/* Branch */}
            <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-lg backdrop-blur-md">
              <h2 className="mb-4 text-xl font-bold">
                Branch-wise Applications
              </h2>

              <div className="space-y-3">
                {branches.map((branch) => (
                  <div
                    key={branch}
                    className="flex items-center justify-between rounded-lg border border-border px-4 py-3"
                  >
                    <span>{branch}</span>

                    <span className="font-bold">
                      {getCount("branch", branch)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Year */}
            <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-lg backdrop-blur-md">
              <h2 className="mb-4 text-xl font-bold">
                Year-wise Applications
              </h2>

              <div className="space-y-3">
                {years.map((year) => (
                  <div
                    key={year}
                    className="flex items-center justify-between rounded-lg border border-border px-4 py-3"
                  >
                    <span>{year}</span>

                    <span className="font-bold">
                      {getCount("year", year)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-5">
            <p className="font-semibold text-red-600">
              Something went wrong
            </p>

            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* Search + Filters */}
        {!loading && members.length > 0 && (
          <div className="mb-6 rounded-2xl border border-border bg-background/80 p-5 shadow-lg backdrop-blur-md">

            <div className="mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5" />

              <h2 className="font-semibold">
                Search & Filter Applications
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">

              {/* Search */}
              <div className="relative lg:col-span-2">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Search name, USN, email, skills..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background py-3.5 pl-12 pr-4 outline-none transition focus:border-foreground"
                />
              </div>

              {/* Branch */}
              <select
                value={branchFilter}
                onChange={(e) => setBranchFilter(e.target.value)}
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-foreground"
              >
                <option value="All">All Branches</option>

                {branches.map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>

              {/* Year */}
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-foreground"
              >
                <option value="All">All Years</option>

                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              {/* Department */}
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-foreground lg:col-span-2"
              >
                <option value="All">
                  All Departments
                </option>

                {departments.map((department) => (
                  <option
                    key={department}
                    value={department}
                  >
                    {department}
                  </option>
                ))}
              </select>

              {/* Clear */}
              <button
                onClick={clearFilters}
                className="rounded-xl border border-border px-4 py-3 font-medium transition hover:bg-muted"
              >
                Clear Filters
              </button>

            </div>

          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="rounded-2xl border border-border p-10 text-center">
            <p className="text-muted-foreground">
              Loading applications...
            </p>
          </div>

        ) : members.length === 0 ? (

          <div className="rounded-2xl border border-border p-10 text-center">
            <Users className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

            <h2 className="text-xl font-semibold">
              No applications yet
            </h2>

            <p className="mt-2 text-muted-foreground">
              Applications submitted through the Join Club form will appear here.
            </p>
          </div>

        ) : filteredMembers.length === 0 ? (

          <div className="rounded-2xl border border-border p-10 text-center">
            <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

            <h2 className="text-xl font-semibold">
              No matching applications
            </h2>

            <p className="mt-2 text-muted-foreground">
              Try changing your search or filters.
            </p>
          </div>

        ) : (

          /* Applications Table */
          <div className="overflow-hidden rounded-2xl border border-border bg-background/80 shadow-xl backdrop-blur-md">

            <div className="overflow-x-auto">

              <table className="w-full text-left text-sm">

                <thead className="border-b border-border bg-muted/40">
                  <tr>

                    <th className="px-5 py-4 font-semibold">
                      Name
                    </th>

                    <th className="px-5 py-4 font-semibold">
                      USN
                    </th>

                    <th className="px-5 py-4 font-semibold">
                      Branch
                    </th>

                    <th className="px-5 py-4 font-semibold">
                      Year
                    </th>

                    <th className="px-5 py-4 font-semibold">
                      Department
                    </th>

                    <th className="px-5 py-4 font-semibold">
                      Applied
                    </th>

                    <th className="px-5 py-4 text-right font-semibold">
                      Actions
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {filteredMembers.map((member) => (
                    <tr
                      key={member.id}
                      className="border-b border-border last:border-0 hover:bg-muted/20"
                    >

                      <td className="px-5 py-4 font-medium">
                        {member.full_name}
                      </td>

                      <td className="px-5 py-4">
                        {member.usn}
                      </td>

                      <td className="px-5 py-4">
                        {member.branch}
                      </td>

                      <td className="px-5 py-4">
                        {member.year}
                      </td>

                      <td className="px-5 py-4">
                        {member.department}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">
                        {formatDate(member.created_at)}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">

                          <button
                            onClick={() =>
                              setSelectedMember(member)
                            }
                            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 transition hover:bg-muted"
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(member.id)
                            }
                            disabled={
                              deletingId === member.id
                            }
                            className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 px-3 py-2 text-red-600 transition hover:bg-red-500/10 disabled:opacity-50"
                          >
                            <Trash2 className="h-4 w-4" />

                            {deletingId === member.id
                              ? "Deleting..."
                              : "Delete"}
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>
        )}

      </div>

      {/* Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background p-6 shadow-2xl md:p-8">

            {/* Modal Header */}
            <div className="mb-6 flex items-start justify-between gap-4">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  APPLICATION DETAILS
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {selectedMember.full_name}
                </h2>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="rounded-lg border border-border p-2 transition hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* Details */}
            <div className="grid gap-5 sm:grid-cols-2">

              <Detail
                label="Full Name"
                value={selectedMember.full_name}
              />

              <Detail
                label="USN / Roll Number"
                value={selectedMember.usn}
              />

              <Detail
                label="Branch"
                value={selectedMember.branch}
              />

              <Detail
                label="Year"
                value={selectedMember.year}
              />

              <Detail
                label="Phone"
                value={selectedMember.phone}
              />

              <Detail
                label="Email"
                value={selectedMember.email}
              />

              <Detail
                label="Department"
                value={selectedMember.department}
              />

              <Detail
                label="Core Area of Interest"
                value={selectedMember.interest_area}
              />

            </div>

            {/* Skills */}
            <div className="mt-5 space-y-2">
              <p className="text-sm font-medium">
                Technical & Non-Technical Skills
              </p>

              <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                {selectedMember.skills}
              </div>
            </div>

            {/* Reason */}
            <div className="mt-5 space-y-2">
              <p className="text-sm font-medium">
                Why do they want to join?
              </p>

              <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                {selectedMember.reason}
              </div>
            </div>

            {/* Application Date */}
            <div className="mt-5 space-y-2">
              <p className="text-sm font-medium">
                Application Date
              </p>

              <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                {formatDate(selectedMember.created_at)}
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setSelectedMember(null)}
              className="mt-8 w-full rounded-lg bg-foreground px-5 py-3 font-semibold text-background transition hover:opacity-90"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </main>
  )
}

function Detail({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="space-y-2">

      <p className="text-sm font-medium">
        {label}
      </p>

      <div className="rounded-lg border border-border p-3 text-sm text-muted-foreground">
        {value}
      </div>

    </div>
  )
}
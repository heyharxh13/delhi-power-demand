"use client"

import { useState } from "react"
import { Bell, Lock, Mail, User, Users } from "lucide-react"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl text-gray-600">Settings</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-md ${
                activeTab === "profile" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab("account")}
              className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-md ${
                activeTab === "account" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Lock className="w-5 h-5" />
              <span>Account</span>
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-md ${
                activeTab === "notifications" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-md ${
                activeTab === "team" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Team</span>
            </button>
            <button
              onClick={() => setActiveTab("system")}
              className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-md ${
                activeTab === "system" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>System</span>
            </button>
          </nav>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
          {activeTab === "profile" && (
            <div>
              <h3 className="text-lg font-medium mb-6">Profile Settings</h3>
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    defaultValue="Rajesh Kumar"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    defaultValue="rajesh.kumar@edelhi.gov.in"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    defaultValue="+91 98765 43210"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    id="role"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    defaultValue="admin"
                  >
                    <option value="admin">Administrator</option>
                    <option value="manager">Manager</option>
                    <option value="operator">Operator</option>
                    <option value="viewer">Viewer</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="department" className="text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    defaultValue="Operations"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Office Address
                  </label>
                  <textarea
                    id="address"
                    rows={3}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    defaultValue="Delhi Power System Office, Sector 4, Dwarka, New Delhi - 110078"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="bio" className="text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows={3}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                    defaultValue="Senior Administrator with 10+ years of experience in power distribution systems and grid management. Specialized in operational efficiency and emergency response protocols."
                  />
                </div>
                <div className="pt-5">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "account" && (
            <div>
              <h3 className="text-lg font-medium mb-6">Account Settings</h3>
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="current-password" className="text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="new-password" className="text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="pt-5">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Update Password
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-md font-medium mb-4">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-700">Protect your account with 2FA</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Add an extra layer of security to your account by requiring both your password and a
                        verification code.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h3 className="text-lg font-medium mb-6">Notification Settings</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Receive email notifications for important system events
                    </p>
                  </div>
                  <div className="flex items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">SMS Alerts</p>
                    <p className="text-xs text-gray-500 mt-1">Receive SMS alerts for critical system events</p>
                  </div>
                  <div className="flex items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">System Notifications</p>
                    <p className="text-xs text-gray-500 mt-1">Receive in-app notifications for system events</p>
                  </div>
                  <div className="flex items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-md font-medium mb-4">Notification Types</h4>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="outages"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label htmlFor="outages" className="ml-2 text-sm text-gray-700">
                        Power Outages
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="maintenance"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label htmlFor="maintenance" className="ml-2 text-sm text-gray-700">
                        Scheduled Maintenance
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="peak-load"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label htmlFor="peak-load" className="ml-2 text-sm text-gray-700">
                        Peak Load Warnings
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="system-updates"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="system-updates" className="ml-2 text-sm text-gray-700">
                        System Updates
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div>
              <h3 className="text-lg font-medium mb-6">Team Management</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h4 className="text-md font-medium">Team Members</h4>
                  <button
                    type="button"
                    className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Add Member
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-600">AU</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Admin User</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">admin@edelhi.gov.in</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Administrator</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-blue-600 hover:text-blue-900">
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-600">OM</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Operations Manager</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">operations@edelhi.gov.in</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Manager</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-blue-600 hover:text-blue-900">
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-600">TO</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">Technical Operator</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">tech@edelhi.gov.in</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Operator</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            On Leave
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-blue-600 hover:text-blue-900">
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "system" && (
            <div>
              <h3 className="text-lg font-medium mb-6">System Settings</h3>
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="system-name" className="text-sm font-medium text-gray-700">
                    System Name
                  </label>
                  <input
                    type="text"
                    id="system-name"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="Delhi Power System"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="data-retention" className="text-sm font-medium text-gray-700">
                    Data Retention Period
                  </label>
                  <select
                    id="data-retention"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="365"
                  >
                    <option value="30">30 days</option>
                    <option value="90">90 days</option>
                    <option value="180">180 days</option>
                    <option value="365">1 year</option>
                    <option value="730">2 years</option>
                  </select>
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="backup-frequency" className="text-sm font-medium text-gray-700">
                    Backup Frequency
                  </label>
                  <select
                    id="backup-frequency"
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="daily"
                  >
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Maintenance Mode</p>
                    <p className="text-xs text-gray-500 mt-1">Enable maintenance mode to perform system updates</p>
                  </div>
                  <div className="flex items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-md font-medium mb-4">System Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Version</p>
                      <p className="text-sm font-medium">2.5.1</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Last Updated</p>
                      <p className="text-sm font-medium">March 15, 2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Database Size</p>
                      <p className="text-sm font-medium">4.2 GB</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Server Status</p>
                      <p className="text-sm font-medium text-green-600">Healthy</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


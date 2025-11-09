import { Heart, Phone, Shield, FileText, MapPin, MessageCircle, Calendar, AlertTriangle, Lock, BookOpen, Users, DollarSign, Home, GraduationCap, Baby, Stethoscope, Briefcase, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function VictimDashboard() {
  const supportServices = [
    { name: 'National DV Hotline', phone: '1-800-799-7233', available: '24/7', type: 'Crisis Support' },
    { name: 'Crisis Text Line', phone: 'Text START to 88788', available: '24/7', type: 'Text Support' },
    { name: 'RAINN', phone: '1-800-656-4673', available: '24/7', type: 'Sexual Assault' },
    { name: 'Local Shelter Network', phone: '1-555-SHELTER', available: '24/7', type: 'Emergency Housing' },
  ];

  const resources = [
    { title: 'Understanding Your Legal Rights', category: 'Legal', icon: FileText },
    { title: 'Creating a Safety Plan', category: 'Safety', icon: Shield },
    { title: 'Financial Independence Guide', category: 'Empowerment', icon: BookOpen },
    { title: 'Healing and Recovery', category: 'Wellness', icon: Heart },
  ];

  const upcomingAppointments = [
    { type: 'Counseling Session', date: 'Nov 8, 2025', time: '2:00 PM', with: 'Dr. Sarah Johnson' },
    { type: 'Legal Consultation', date: 'Nov 10, 2025', time: '10:00 AM', with: 'Attorney Mark Williams' },
  ];

  return (
    <div className="space-y-6">
      {/* Emergency Alert */}
      <Alert className="bg-red-50 border-red-200">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-900">
          <strong>In immediate danger?</strong> Call 911 or use the emergency button in the top right corner.
        </AlertDescription>
      </Alert>

      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Welcome to Your Safe Space</h2>
        <p className="text-gray-600">Access support, resources, and connect with professionals who care.</p>
      </div>

      <Tabs defaultValue="resources" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="support">Support Services</TabsTrigger>
          <TabsTrigger value="appointments">My Appointments</TabsTrigger>
          <TabsTrigger value="safety">Safety Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 bg-gradient-to-br from-pink-50 to-pink-100">
              <MessageCircle className="h-8 w-8 text-pink-600 mb-3" />
              <h3 className="text-lg text-gray-900 mb-2">Chat with Counsellor</h3>
              <p className="text-sm text-gray-600 mb-4">Get immediate support from a professional</p>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Start Chat</Button>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <Shield className="h-8 w-8 text-indigo-600 mb-3" />
              <h3 className="text-lg text-gray-900 mb-2">Create Safety Plan</h3>
              <p className="text-sm text-gray-600 mb-4">Personalized plan for your security</p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
              <FileText className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-lg text-gray-900 mb-2">Legal Resources</h3>
              <p className="text-sm text-gray-600 mb-4">Understand your rights and options</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
            </Card>
          </div>

          {/* Resource Library */}
          <Card className="p-6">
            <h3 className="text-lg text-gray-900 mb-4">Resource Library</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="bg-purple-100 p-2 rounded">
                      <Icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">{resource.title}</h4>
                      <Badge variant="secondary" className="text-xs">{resource.category}</Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Educational Content */}
          <Card className="p-6">
            <h3 className="text-lg text-gray-900 mb-4">Understanding Domestic Violence</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What is Domestic Violence?</h4>
                <p className="text-sm text-gray-600">
                  Domestic violence is a pattern of behavior used to gain or maintain power and control over an intimate partner. 
                  It can include physical, emotional, sexual, economic, or psychological abuse.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Types of Abuse</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>Physical:</strong> Hitting, pushing, restraining</li>
                  <li>• <strong>Emotional:</strong> Humiliation, intimidation, isolation</li>
                  <li>• <strong>Financial:</strong> Controlling money, preventing employment</li>
                  <li>• <strong>Sexual:</strong> Non-consensual acts, coercion</li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          {/* Comprehensive Support Services Overview */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
            <h3 className="text-xl text-gray-900 mb-2">Comprehensive Support Services</h3>
            <p className="text-sm text-gray-600 mb-4">
              Access a complete range of support services designed to help you through every step of your journey to safety and recovery.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-white rounded-lg">
                <Phone className="h-6 w-6 text-red-600 mx-auto mb-1" />
                <p className="text-xs text-gray-700">Crisis Support</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <Home className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                <p className="text-xs text-gray-700">Housing</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-1" />
                <p className="text-xs text-gray-700">Financial Aid</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <Stethoscope className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                <p className="text-xs text-gray-700">Healthcare</p>
              </div>
            </div>
          </Card>

          {/* Emergency Hotlines */}
          <Card className="p-6 border-red-200 bg-red-50">
            <h3 className="text-lg text-gray-900 mb-4">🆘 Emergency Crisis Support - Available 24/7</h3>
            <div className="space-y-4">
              {supportServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{service.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {service.phone}
                      </span>
                      <Badge variant="secondary">{service.available}</Badge>
                      <Badge variant="outline">{service.type}</Badge>
                    </div>
                  </div>
                  <Button size="sm" className="gap-2 bg-red-600 hover:bg-red-700">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Comprehensive Services Accordion */}
          <Card className="p-6">
            <h3 className="text-lg text-gray-900 mb-4">All Support Services by Category</h3>
            <Accordion type="single" collapsible className="w-full">
              
              {/* Mental Health & Counseling */}
              <AccordionItem value="mental-health">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-pink-600" />
                    <div>
                      <h4 className="text-gray-900">Mental Health & Counseling Services</h4>
                      <p className="text-xs text-gray-600">Individual therapy, trauma counseling, support groups</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-3">
                    {[
                      { name: 'Individual Trauma Therapy', provider: 'Licensed therapists', contact: '1-555-THERAPY' },
                      { name: 'Group Counseling Sessions', provider: 'Multiple locations', contact: '1-555-GROUPS' },
                      { name: 'PTSD Treatment Programs', provider: 'Specialized centers', contact: '1-555-PTSD' },
                      { name: 'Art & Music Therapy', provider: 'Healing arts center', contact: '1-555-ARTHELP' },
                      { name: 'Online Therapy Options', provider: 'Virtual sessions', contact: 'www.virtualtherapy.org' },
                    ].map((service, idx) => (
                      <div key={idx} className="p-3 bg-pink-50 border border-pink-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-gray-900 text-sm mb-1">{service.name}</h5>
                            <p className="text-xs text-gray-600">{service.provider} • {service.contact}</p>
                          </div>
                          <Button size="sm" variant="outline">Contact</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Legal Services */}
              <AccordionItem value="legal">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-indigo-600" />
                    <div>
                      <h4 className="text-gray-900">Legal Assistance & Advocacy</h4>
                      <p className="text-xs text-gray-600">Free legal aid, restraining orders, custody support</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-3">
                    {[
                      { name: 'Free Legal Consultation', provider: 'Legal Aid Society', contact: '1-555-LEGAL' },
                      { name: 'Restraining Order Assistance', provider: 'Court advocates', contact: '1-555-PROTECT' },
                      { name: 'Divorce & Separation Support', provider: 'Family law attorneys', contact: '1-555-DIVORCE' },
                      { name: 'Child Custody Services', provider: 'Child advocacy center', contact: '1-555-CUSTODY' },
                      { name: 'Immigration Legal Help', provider: 'Immigration lawyers', contact: '1-555-IMMHELP' },
                    ].map((service, idx) => (
                      <div key={idx} className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-gray-900 text-sm mb-1">{service.name}</h5>
                            <p className="text-xs text-gray-600">{service.provider} • {service.contact}</p>
                          </div>
                          <Button size="sm" variant="outline">Learn More</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Housing & Shelter */}
              <AccordionItem value="housing">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="text-gray-900">Housing & Shelter Services</h4>
                      <p className="text-xs text-gray-600">Emergency shelters, transitional housing, long-term support</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-3">
                    {[
                      { name: 'Emergency Shelter Network', provider: '24/7 safe housing', contact: '1-555-SHELTER', availability: 'Immediate' },
                      { name: 'Transitional Housing Programs', provider: '6-24 month support', contact: '1-555-TRANSIT', availability: 'Available' },
                      { name: 'Permanent Housing Assistance', provider: 'Section 8 & subsidies', contact: '1-555-HOUSING', availability: 'Waitlist' },
                      { name: 'Family Shelters', provider: 'Child-friendly spaces', contact: '1-555-FAMILY', availability: 'Available' },
                      { name: 'Pet-Friendly Shelter Options', provider: 'Shelters with pet care', contact: '1-555-PETHELP', availability: 'Limited' },
                    ].map((service, idx) => (
                      <div key={idx} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="text-gray-900 text-sm">{service.name}</h5>
                              <Badge variant={service.availability === 'Immediate' ? 'default' : 'secondary'} className="text-xs">
                                {service.availability}
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-600">{service.provider} • {service.contact}</p>
                          </div>
                          <Button size="sm" variant="outline">Contact</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Financial Assistance */}
              <AccordionItem value="financial">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="text-gray-900">Financial Assistance & Economic Empowerment</h4>
                      <p className="text-xs text-gray-600">Emergency funds, job training, financial literacy</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-3">
                    {[
                      { name: 'Emergency Financial Assistance', provider: 'Up to $2,000', contact: '1-555-FUNDS' },
                      { name: 'Job Training & Placement', provider: 'Free career programs', contact: '1-555-JOBS' },
                      { name: 'Financial Literacy Classes', provider: 'Budget & credit repair', contact: '1-555-MONEY' },
                      { name: 'Childcare Subsidies', provider: 'State assistance', contact: '1-555-CHILDCARE' },
                      { name: 'Food & Nutrition Programs', provider: 'SNAP, food banks', contact: '1-555-FOOD' },
                    ].map((service, idx) => (
                      <div key={idx} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-gray-900 text-sm mb-1">{service.name}</h5>
                            <p className="text-xs text-gray-600">{service.provider} • {service.contact}</p>
                          </div>
                          <Button size="sm" variant="outline">Apply</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Healthcare Services */}
              <AccordionItem value="healthcare">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Stethoscope className="h-5 w-5 text-purple-600" />
                    <div>
                      <h4 className="text-gray-900">Healthcare & Medical Services</h4>
                      <p className="text-xs text-gray-600">Medical care, dental, prescriptions, health insurance</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-3">
                    {[
                      { name: 'Free Medical Clinics', provider: 'Community health centers', contact: '1-555-HEALTH' },
                      { name: 'Mental Health Medications', provider: 'Prescription assistance', contact: '1-555-MEDS' },
                      { name: 'Dental Care Services', provider: 'Sliding scale fees', contact: '1-555-DENTAL' },
                      { name: 'Health Insurance Navigation', provider: 'Medicaid enrollment', contact: '1-555-INSURE' },
                      { name: 'Sexual Assault Nurse Exams', provider: 'Confidential SANE exams', contact: '1-555-SANE' },
                    ].map((service, idx) => (
                      <div key={idx} className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-gray-900 text-sm mb-1">{service.name}</h5>
                            <p className="text-xs text-gray-600">{service.provider} • {service.contact}</p>
                          </div>
                          <Button size="sm" variant="outline">Schedule</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Children & Family Services */}
              <AccordionItem value="children">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Baby className="h-5 w-5 text-amber-600" />
                    <div>
                      <h4 className="text-gray-900">Children & Family Support Services</h4>
                      <p className="text-xs text-gray-600">Childcare, education, youth counseling, parenting support</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-3">
                    {[
                      { name: 'Child Counseling Services', provider: 'Trauma-informed therapy', contact: '1-555-KIDHELP' },
                      { name: 'School Enrollment Assistance', provider: 'Education advocates', contact: '1-555-SCHOOL' },
                      { name: 'After-School Programs', provider: 'Free youth activities', contact: '1-555-YOUTH' },
                      { name: 'Parenting Support Classes', provider: 'Evidence-based programs', contact: '1-555-PARENT' },
                      { name: 'Child Protective Services', provider: 'CPS coordination', contact: '1-555-CPS' },
                    ].map((service, idx) => (
                      <div key={idx} className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-gray-900 text-sm mb-1">{service.name}</h5>
                            <p className="text-xs text-gray-600">{service.provider} • {service.contact}</p>
                          </div>
                          <Button size="sm" variant="outline">Contact</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Education & Career */}
              <AccordionItem value="education">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-cyan-600" />
                    <div>
                      <h4 className="text-gray-900">Education & Career Development</h4>
                      <p className="text-xs text-gray-600">GED programs, vocational training, college support</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-3">
                    {[
                      { name: 'GED Preparation Classes', provider: 'Free adult education', contact: '1-555-GED' },
                      { name: 'Vocational Training Programs', provider: 'Job certifications', contact: '1-555-TRAIN' },
                      { name: 'College & Scholarship Info', provider: 'Education counselors', contact: '1-555-COLLEGE' },
                      { name: 'Computer Literacy Classes', provider: 'Technology training', contact: '1-555-TECH' },
                      { name: 'Resume & Interview Coaching', provider: 'Career services', contact: '1-555-CAREER' },
                    ].map((service, idx) => (
                      <div key={idx} className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-gray-900 text-sm mb-1">{service.name}</h5>
                            <p className="text-xs text-gray-600">{service.provider} • {service.contact}</p>
                          </div>
                          <Button size="sm" variant="outline">Enroll</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Specialized Support */}
              <AccordionItem value="specialized">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-violet-600" />
                    <div>
                      <h4 className="text-gray-900">Specialized & Culturally-Specific Services</h4>
                      <p className="text-xs text-gray-600">Language support, LGBTQ+, disabilities, immigrant services</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-3">
                    {[
                      { name: 'Multilingual Support Services', provider: '20+ languages', contact: '1-555-TRANSLATE' },
                      { name: 'LGBTQ+ Affirming Services', provider: 'Safe & inclusive support', contact: '1-555-LGBTQ' },
                      { name: 'Disability Services', provider: 'Accessible resources', contact: '1-555-ACCESS' },
                      { name: 'Immigration Support', provider: 'VAWA & U-Visa help', contact: '1-555-IMMIG' },
                      { name: 'Elder Abuse Services', provider: 'Senior protection', contact: '1-555-ELDER' },
                      { name: 'Substance Abuse Treatment', provider: 'Recovery programs', contact: '1-555-RECOVERY' },
                    ].map((service, idx) => (
                      <div key={idx} className="p-3 bg-violet-50 border border-violet-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-gray-900 text-sm mb-1">{service.name}</h5>
                            <p className="text-xs text-gray-600">{service.provider} • {service.contact}</p>
                          </div>
                          <Button size="sm" variant="outline">Connect</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </Card>

          {/* Local Shelters */}
          <Card className="p-6">
            <h3 className="text-lg text-gray-900 mb-4">Emergency Shelters Near You</h3>
            <div className="space-y-3">
              {[
                { name: 'Safe Haven Shelter', distance: '2.3 miles', beds: 'Available' },
                { name: 'Hope Center', distance: '4.1 miles', beds: 'Available' },
                { name: 'New Beginnings House', distance: '6.8 miles', beds: 'Limited' },
              ].map((shelter, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <div>
                      <h4 className="text-gray-900">{shelter.name}</h4>
                      <p className="text-sm text-gray-600">{shelter.distance} away • {shelter.beds}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Support Groups */}
          <Card className="p-6">
            <h3 className="text-lg text-gray-900 mb-4">Support Groups</h3>
            <p className="text-sm text-gray-600 mb-4">
              Connect with others who understand your journey. All groups are facilitated by trained professionals.
            </p>
            <div className="space-y-3">
              {[
                { name: 'Women\'s Support Circle', schedule: 'Mondays 6:00 PM', type: 'In-Person' },
                { name: 'Survivors Together', schedule: 'Wednesdays 7:00 PM', type: 'Virtual' },
                { name: 'Healing Journey', schedule: 'Fridays 5:30 PM', type: 'Hybrid' },
              ].map((group, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="text-gray-900">{group.name}</h4>
                      <p className="text-sm text-gray-600">{group.schedule} • {group.type}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Join Group</Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg text-gray-900 mb-4">Upcoming Appointments</h3>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-purple-50">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className="text-gray-900 mb-1">{appointment.type}</h4>
                        <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
                        <p className="text-sm text-gray-600">With {appointment.with}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Reschedule</Button>
                      <Button size="sm">Join</Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-8">No upcoming appointments</p>
            )}
          </Card>

          <Card className="p-6">
            <h3 className="text-lg text-gray-900 mb-4">Schedule New Appointment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-auto py-6 flex flex-col gap-2 bg-blue-600 hover:bg-blue-700">
                <MessageCircle className="h-6 w-6" />
                <span>Counseling Session</span>
              </Button>
              <Button className="h-auto py-6 flex flex-col gap-2 bg-indigo-600 hover:bg-indigo-700">
                <FileText className="h-6 w-6" />
                <span>Legal Consultation</span>
              </Button>
              <Button className="h-auto py-6 flex flex-col gap-2 bg-purple-600 hover:bg-purple-700">
                <Shield className="h-6 w-6" />
                <span>Safety Planning</span>
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-6">
          <Alert className="bg-blue-50 border-blue-200">
            <Lock className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-900">
              Your safety plan is private and encrypted. Only you can access this information.
            </AlertDescription>
          </Alert>

          <Card className="p-6">
            <h3 className="text-lg text-gray-900 mb-4">Personal Safety Plan</h3>
            <p className="text-sm text-gray-600 mb-6">
              A safety plan is a personalized, practical plan to stay safe while in a relationship, planning to leave, or after leaving.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Components:</h4>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Safe Places to Go</h5>
                    <p className="text-sm text-gray-600">Identify locations where you can go in an emergency</p>
                    <Button size="sm" variant="outline" className="mt-3">Add Location</Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Emergency Contacts</h5>
                    <p className="text-sm text-gray-600">People you trust who can help in crisis situations</p>
                    <Button size="sm" variant="outline" className="mt-3">Add Contact</Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Important Documents</h5>
                    <p className="text-sm text-gray-600">List of documents to keep safe or readily accessible</p>
                    <Button size="sm" variant="outline" className="mt-3">View Checklist</Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Financial Safety</h5>
                    <p className="text-sm text-gray-600">Steps to protect your financial independence</p>
                    <Button size="sm" variant="outline" className="mt-3">Learn More</Button>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">Create My Safety Plan</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
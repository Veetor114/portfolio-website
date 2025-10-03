import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Mail, Clock, User, MessageSquare } from "lucide-react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  read: boolean;
  status: string;
}

export function Admin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-810ba79e/admin/contacts`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }

      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-810ba79e/admin/contacts/${id}/read`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (response.ok) {
        setContacts(prev => prev.map(contact => 
          contact.id === id ? { ...contact, read: true } : contact
        ));
      }
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  };

  const replyViaEmail = (contact: Contact) => {
    const subject = `Re: Your portfolio contact message`;
    const body = `Hi ${contact.name},\n\nThank you for your message:\n\n"${contact.message}"\n\nBest regards,\nVictor`;
    
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading contacts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
            <Button onClick={fetchContacts} className="mt-4">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const unreadCount = contacts.filter(c => !c.read).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-gray-900 dark:text-gray-100 mb-2">Contact Messages</h1>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <Mail className="w-4 h-4 mr-2" />
              {contacts.length} Total Messages
            </Badge>
            {unreadCount > 0 && (
              <Badge className="bg-blue-600">
                <MessageSquare className="w-4 h-4 mr-2" />
                {unreadCount} Unread
              </Badge>
            )}
            <Button onClick={fetchContacts} variant="outline" size="sm">
              Refresh
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {contacts.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No contact messages yet.</p>
              </CardContent>
            </Card>
          ) : (
            contacts.map((contact) => (
              <Card key={contact.id} className={`${!contact.read ? 'border-blue-200 bg-blue-50/30' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{contact.name}</CardTitle>
                        <p className="text-gray-600 text-sm">{contact.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {!contact.read && (
                        <Badge className="bg-blue-600">New</Badge>
                      )}
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(contact.timestamp).toLocaleDateString()} {new Date(contact.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-white p-4 rounded-lg border mb-4">
                    <p className="text-gray-800 whitespace-pre-wrap">{contact.message}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => replyViaEmail(contact)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Reply via Email
                    </Button>
                    {!contact.read && (
                      <Button 
                        onClick={() => markAsRead(contact.id)}
                        variant="outline"
                      >
                        Mark as Read
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login.jsx";
import AdminLayout from "./layouts/AdminLayout";
import PartnersList from "./pages/PartnerList";
import PartnerForm from "./pages/PartnerForm";
import TeamList from "./pages/TeamList";
import TeamForm from "./pages/TeamForm";
import TestimonialsList from "./pages/TestimonialsList";
import TestimonialForm from "./pages/TestimonialForm";
import Home from "./pages/Home.jsx";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login"
                           element={
                               <Login />
                           }
                    />
                    
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                   <Home/>
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path="/team"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                    <TeamList />
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path="/team/new"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                    <TeamForm />
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path="/team/:id"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                    <TeamForm />
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path="/partners"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                    <PartnersList />
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path="/partners/new"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                    <PartnerForm />
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path="/partners/:id"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                    <PartnerForm />
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path="/testimonials"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                    <TestimonialsList />
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path="/testimonials/new"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                    <TestimonialForm />
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route
                        path="/testimonials/:id"
                        element={
                            <ProtectedRoute>
                                <AdminLayout>
                                    <TestimonialForm />
                                </AdminLayout>
                            </ProtectedRoute>
                        }
                    />
                    
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ab_tests: {
        Row: {
          created_at: string
          id: string
          key: string
          name: string
          page: string
          status: string
          updated_at: string
          variant_a_label: string
          variant_b_label: string
        }
        Insert: {
          created_at?: string
          id?: string
          key: string
          name: string
          page?: string
          status?: string
          updated_at?: string
          variant_a_label: string
          variant_b_label: string
        }
        Update: {
          created_at?: string
          id?: string
          key?: string
          name?: string
          page?: string
          status?: string
          updated_at?: string
          variant_a_label?: string
          variant_b_label?: string
        }
        Relationships: []
      }
      assets: {
        Row: {
          bucket: string
          created_at: string
          file_name: string
          id: string
          mime_type: string | null
          path: string
          size_bytes: number | null
          uploaded_by: string | null
        }
        Insert: {
          bucket: string
          created_at?: string
          file_name: string
          id?: string
          mime_type?: string | null
          path: string
          size_bytes?: number | null
          uploaded_by?: string | null
        }
        Update: {
          bucket?: string
          created_at?: string
          file_name?: string
          id?: string
          mime_type?: string | null
          path?: string
          size_bytes?: number | null
          uploaded_by?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string
          excerpt: string
          featured: boolean
          featured_image_url: string | null
          id: string
          og_image_url: string | null
          published: boolean
          published_at: string
          seo_description: string | null
          seo_title: string | null
          slug: string
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string
          featured?: boolean
          featured_image_url?: string | null
          id?: string
          og_image_url?: string | null
          published?: boolean
          published_at?: string
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string
          featured?: boolean
          featured_image_url?: string | null
          id?: string
          og_image_url?: string | null
          published?: boolean
          published_at?: string
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      campaign_events: {
        Row: {
          campaign_id: string | null
          created_at: string
          event_name: string
          id: string
          metadata: Json
          path: string | null
          session_id: string
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
          variant: string | null
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string
          event_name: string
          id?: string
          metadata?: Json
          path?: string | null
          session_id: string
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
          variant?: string | null
        }
        Update: {
          campaign_id?: string | null
          created_at?: string
          event_name?: string
          id?: string
          metadata?: Json
          path?: string | null
          session_id?: string
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
          variant?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_events_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          created_at: string
          cta_label: string
          cta_variant_b_label: string | null
          description: string
          end_date: string | null
          headline: string
          hero_image_url: string | null
          id: string
          name: string
          slug: string
          start_date: string | null
          status: string
          target_audience: string | null
          updated_at: string
          utm_campaign: string | null
        }
        Insert: {
          created_at?: string
          cta_label?: string
          cta_variant_b_label?: string | null
          description?: string
          end_date?: string | null
          headline?: string
          hero_image_url?: string | null
          id?: string
          name: string
          slug: string
          start_date?: string | null
          status?: string
          target_audience?: string | null
          updated_at?: string
          utm_campaign?: string | null
        }
        Update: {
          created_at?: string
          cta_label?: string
          cta_variant_b_label?: string | null
          description?: string
          end_date?: string | null
          headline?: string
          hero_image_url?: string | null
          id?: string
          name?: string
          slug?: string
          start_date?: string | null
          status?: string
          target_audience?: string | null
          updated_at?: string
          utm_campaign?: string | null
        }
        Relationships: []
      }
      case_studies: {
        Row: {
          challenge: string
          client_name: string
          created_at: string
          duration: string | null
          growth_percentage: number | null
          headline: string
          headline_metric: string | null
          id: string
          image_url: string | null
          industry: string
          is_demo: boolean
          metrics_after: Json
          metrics_before: Json
          published: boolean
          services_used: string[]
          slug: string
          sort_order: number
          strategy: string
          testimonial: string | null
          testimonial_author: string | null
          updated_at: string
        }
        Insert: {
          challenge?: string
          client_name: string
          created_at?: string
          duration?: string | null
          growth_percentage?: number | null
          headline?: string
          headline_metric?: string | null
          id?: string
          image_url?: string | null
          industry?: string
          is_demo?: boolean
          metrics_after?: Json
          metrics_before?: Json
          published?: boolean
          services_used?: string[]
          slug: string
          sort_order?: number
          strategy?: string
          testimonial?: string | null
          testimonial_author?: string | null
          updated_at?: string
        }
        Update: {
          challenge?: string
          client_name?: string
          created_at?: string
          duration?: string | null
          growth_percentage?: number | null
          headline?: string
          headline_metric?: string | null
          id?: string
          image_url?: string | null
          industry?: string
          is_demo?: boolean
          metrics_after?: Json
          metrics_before?: Json
          published?: boolean
          services_used?: string[]
          slug?: string
          sort_order?: number
          strategy?: string
          testimonial?: string | null
          testimonial_author?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          created_at: string
          form_name: string
          id: string
          lead_id: string | null
          payload: Json
          status: string
          webhook_status: string | null
        }
        Insert: {
          created_at?: string
          form_name: string
          id?: string
          lead_id?: string | null
          payload?: Json
          status?: string
          webhook_status?: string | null
        }
        Update: {
          created_at?: string
          form_name?: string
          id?: string
          lead_id?: string | null
          payload?: Json
          status?: string
          webhook_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          ab_variant: string | null
          budget: string | null
          business_name: string | null
          created_at: string
          email: string
          form_type: string
          goal: string | null
          id: string
          industry: string | null
          is_demo: boolean
          landing_page: string | null
          message: string | null
          name: string
          phone: string | null
          referrer: string | null
          service: string | null
          status: string
          updated_at: string
          user_id: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
          website: string | null
        }
        Insert: {
          ab_variant?: string | null
          budget?: string | null
          business_name?: string | null
          created_at?: string
          email: string
          form_type?: string
          goal?: string | null
          id?: string
          industry?: string | null
          is_demo?: boolean
          landing_page?: string | null
          message?: string | null
          name: string
          phone?: string | null
          referrer?: string | null
          service?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
          website?: string | null
        }
        Update: {
          ab_variant?: string | null
          budget?: string | null
          business_name?: string | null
          created_at?: string
          email?: string
          form_type?: string
          goal?: string | null
          id?: string
          industry?: string | null
          is_demo?: boolean
          landing_page?: string | null
          message?: string | null
          name?: string
          phone?: string | null
          referrer?: string | null
          service?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
          website?: string | null
        }
        Relationships: []
      }
      page_views: {
        Row: {
          created_at: string
          device: string | null
          id: string
          path: string
          referrer: string | null
          session_id: string
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          created_at?: string
          device?: string | null
          id?: string
          path: string
          referrer?: string | null
          session_id: string
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          created_at?: string
          device?: string | null
          id?: string
          path?: string
          referrer?: string | null
          session_id?: string
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          benefits: string[]
          body: string
          code: string
          created_at: string
          description: string
          id: string
          name: string
          published: boolean
          slug: string
          sort_order: number
          tagline: string
          updated_at: string
        }
        Insert: {
          benefits?: string[]
          body?: string
          code?: string
          created_at?: string
          description?: string
          id?: string
          name: string
          published?: boolean
          slug: string
          sort_order?: number
          tagline?: string
          updated_at?: string
        }
        Update: {
          benefits?: string[]
          body?: string
          code?: string
          created_at?: string
          description?: string
          id?: string
          name?: string
          published?: boolean
          slug?: string
          sort_order?: number
          tagline?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_staff: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "editor" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor", "user"],
    },
  },
} as const

-- 1. Bảng Khóa học (Courses)
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL DEFAULT 500000,
  price_sale INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Bảng Thông tin người dùng (Profiles)
-- [UPDATED] Xóa liên kết khóa ngoại với auth.users để hỗ trợ NextAuth độc lập
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Tự sinh UUID
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'user', -- 'user' hoặc 'admin'
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Cập nhật bảng Ghi danh (Enrollments)
ALTER TABLE public.enrollments 
  ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();

-- Tạo index
CREATE INDEX IF NOT EXISTS idx_courses_slug ON public.courses(slug);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_email ON public.enrollments(user_email);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON public.enrollments(status);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);

-- DATA MẪU
INSERT INTO public.courses (slug, title, description, price)
VALUES ('developer.mozilla.org', 'Lập trình Web chuyên nghiệp', 'Khóa học lập trình web từ cơ bản đến nâng cao theo chuẩn MDN.', 10000)
ON CONFLICT (slug) DO NOTHING;

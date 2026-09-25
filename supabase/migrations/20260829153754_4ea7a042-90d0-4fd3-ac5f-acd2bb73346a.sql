CREATE POLICY "staff_read_marketing_files" ON storage.objects FOR SELECT TO authenticated
USING (bucket_id IN ('marketing-assets','case-study-images','blog-images') AND public.is_staff(auth.uid()));
CREATE POLICY "staff_insert_marketing_files" ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id IN ('marketing-assets','case-study-images','blog-images') AND public.is_staff(auth.uid()));
CREATE POLICY "staff_update_marketing_files" ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id IN ('marketing-assets','case-study-images','blog-images') AND public.is_staff(auth.uid()))
WITH CHECK (bucket_id IN ('marketing-assets','case-study-images','blog-images') AND public.is_staff(auth.uid()));
CREATE POLICY "staff_delete_marketing_files" ON storage.objects FOR DELETE TO authenticated
USING (bucket_id IN ('marketing-assets','case-study-images','blog-images') AND public.is_staff(auth.uid()));

CREATE POLICY "own_avatar_read" ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "own_avatar_insert" ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "own_avatar_update" ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text)
WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "own_avatar_delete" ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);
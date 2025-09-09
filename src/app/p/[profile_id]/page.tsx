import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ profile_id: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const profileId = (await params).profile_id;
  return {
    title: profileId,
    description: `Join ${profileId} now!`,
  };
}

export default async function ProfilePage({ params }: Props) {
  const { profile_id } = await params;

  return (
    <div className="flex max-w-full justify-center">
      <div className="mt-24">
        <p className="font-medium text-lg">Search for profile: {profile_id}</p>
      </div>
    </div>
  );
}

import { SignUp } from "@clerk/nextjs";

type SignUpPageProps = {
    searchParams: {
        redirectUrl: string;
    }
}

function SignUpPage({ searchParams: { redirectUrl } }: SignUpPageProps){
    return(
        <section className="py-14">
            <div className="container mx-auto px4">
                <div className="flex justify-center">
                    <SignUp signInUrl="/sign-in" redirectUrl={redirectUrl} />
                </div>
            </div>
        </section>
    )
}

export default SignUpPage;
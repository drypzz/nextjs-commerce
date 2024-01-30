import { SignIn } from "@clerk/nextjs";

type SignInPageProps = {
    searchParams: {
        redirectUrl: string;
    }
}

function SignInPage({ searchParams: { redirectUrl } }: SignInPageProps){
    return(
        <section className="py-14">
            <div className="container mx-auto px4">
                <div className="flex justify-center">
                    <SignIn signUpUrl="/sign-up" redirectUrl={redirectUrl} />
                </div>
            </div>
        </section>
    )
}

export default SignInPage;
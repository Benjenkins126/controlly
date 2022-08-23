import PrimaryAlert from '../ui/alert/PrimaryAlert';
import Breadcrumbs from './Breadcrumbs';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Tabs from './Tabs';

interface DashboardLayoutProps {
    children: React.ReactNode;
    alert?: string;
    alertLink?: string;
    alertText?: string;
    alertIcon?: string;
    title: string;
    active?: string;
    breadcrumbsActive: string;
    breadcrumbsPast?: Array<string>;
    tabs: Array<TabObject>;
}

interface TabObject {
    name: String;
    badge?: String;
    active: Boolean;
    link: string;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
    return (
        <main className="w-full h-full flex flex-row overflow-hidden">
            <Sidebar active={props.active} />
            <section className="basis-main bg-bgContent overflow-y-scroll">
                <Navbar />
                <header className="pt-8 px-11">
                    <div className="relative">
                        <Breadcrumbs active={props.breadcrumbsActive} past={props.breadcrumbsPast} />
                        <div className="absolute right-0 -top-8 -mt-0">
                            {props.alert ? <PrimaryAlert link={props.alertLink} linkText={props.alertText} icon={props.alertIcon}>{props.alert}</PrimaryAlert> : ''}
                        </div>
                    </div>
                    <h1 className="font-bold text-4xl pt-2">{props.title}</h1>
                    <Tabs tabs={props.tabs} />
                </header>
                <section className="px-11 py-9 border-t border-black/10">
                    {props.children}
                </section>
                <Footer/>
            </section>
        </main>
    );
}

export default DashboardLayout;
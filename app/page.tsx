/**
 * Main page. Composes all 12 sections in order with gradient dividers
 * between each. Navbar is fixed; Footer sits outside `<main>`.
 */
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GettingStarted from '@/components/GettingStarted';
import CLIEssentials from '@/components/CLIEssentials';
import PermissionModes from '@/components/PermissionModes';
import ClaudeMd from '@/components/ClaudeMd';
import Skills from '@/components/Skills';
import Superpowers from '@/components/Superpowers';
import MCPServers from '@/components/MCPServers';
import HooksSubagents from '@/components/HooksSubagents';
import BigPicture from '@/components/BigPicture';
import Resources from '@/components/Resources';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <hr className="section-divider" />
        <GettingStarted />
        <hr className="section-divider" />
        <CLIEssentials />
        <hr className="section-divider" />
        <PermissionModes />
        <hr className="section-divider" />
        <ClaudeMd />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Superpowers />
        <hr className="section-divider" />
        <MCPServers />
        <hr className="section-divider" />
        <HooksSubagents />
        <hr className="section-divider" />
        <BigPicture />
        <hr className="section-divider" />
        <Resources />
      </main>
      <Footer />
    </>
  );
}

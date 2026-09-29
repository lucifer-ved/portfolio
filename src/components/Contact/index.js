import React, { useRef, useState } from 'react';
import useSlidingIndicator from '../../hooks/useSlidingIndicator';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import {
  ContactLayout,
  Kicker,
  Emboss,
  Lead,
  Facts,
  Fact,
  LiveDot,
  Card,
  Question,
  TopicTrack,
  TopicIndicator,
  Topic,
  Fit,
  TopicList,
  TopicListIndicator,
  TopicRow,
  TopicRadio,
  TopicText,
  Actions,
  BigButton,
  Footer
} from './ContactElements';

const EMAIL = 'lucifer.ved@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/vedantsolanki/';

// Each topic sets the description and the draft that Email / LinkedIn start with
const TOPICS = [
  {
    key: 'fulltime',
    label: 'Full-time',
    promise: 'A senior role where I own systems end to end.',
    detail: 'From the first design to running reliably in production, with a team that likes to ship.',
    subject: 'Full-time role: ',
    draft: "Hi Vedant,\n\nI'm hiring for [role] at [company] and your profile looks like a fit.\nWould you be open to a short call?\n\n"
  },
  {
    key: 'consulting',
    label: 'Consulting',
    promise: 'A second pair of eyes on the hard parts.',
    detail: 'Architecture decisions, systems that need to scale, or bringing AI into your product the right way.',
    subject: 'Consulting: ',
    draft: "Hi Vedant,\n\nWe'd like some help with [topic]. Here's the context:\n\n"
  },
  {
    key: 'contract',
    label: 'Contract',
    promise: 'A clear goal, built and handed over properly.',
    detail: 'I scope it, build it and document it, so your team can take it from there.',
    subject: 'Contract: ',
    draft: "Hi Vedant,\n\nWe have a [length] contract for [project]. Here's the scope:\n\n"
  },
  {
    key: 'build',
    label: 'Product build',
    promise: 'An idea you want to turn into something real.',
    detail: 'Websites, apps and AI tools, from first sketch to launch, through my studio IdeaForgeLabs.',
    subject: 'Product build: ',
    draft: "Hi Vedant,\n\nI'd like to build [what]. Here's the idea:\n\n"
  }
];

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    return false;
  }
};

const Contact = () => {
  const [topicKey, setTopicKey] = useState(TOPICS[0].key);
  const [copied, setCopied] = useState('');
  const topic = TOPICS.find((t) => t.key === topicKey);
  const trackRef = useRef(null);
  const listRef = useRef(null);
  const indicator = useSlidingIndicator(trackRef, '[aria-pressed="true"]', [topicKey]);
  // Phones: the same sliding highlight, moving down a list instead of across a track
  const listIndicator = useSlidingIndicator(listRef, '[aria-pressed="true"]', [topicKey]);

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(topic.subject)}&body=${encodeURIComponent(topic.draft)}`;

  const flash = (what) => {
    setCopied(what);
    setTimeout(() => setCopied(''), 1800);
  };

  // LinkedIn has no prefilled-message link, so copy the draft to paste into a message
  const onLinkedIn = async () => {
    if (await copyText(topic.draft.trim())) flash('draft');
  };

  return (
    <>
      <ContactLayout>
        <div className="reveal">
          <Kicker>Contact</Kicker>
          <Emboss aria-label="Let's talk.">
            <span>LET'S</span>
            <span>TALK.</span>
          </Emboss>
          <Lead>
            Hiring a senior engineer, need an architect's eye on a system that has to scale, or planning a
            product from scratch? <strong>I'd like to hear what you're building.</strong>
          </Lead>
          <Facts>
            <Fact><LiveDot />Available immediately</Fact>
            <Fact>Mumbai, India · IST</Fact>
            <Fact>Hybrid or remote</Fact>
          </Facts>
        </div>

        <Card className="neu-lg reveal">
          <Question id="contact-topic-label">What would you like to talk about?</Question>
          <TopicTrack ref={trackRef} role="group" aria-labelledby="contact-topic-label">
            {indicator && <TopicIndicator aria-hidden="true" style={indicator} />}
            {TOPICS.map((t) => (
              <Topic
                key={t.key}
                type="button"
                className="no-hover"
                $active={t.key === topicKey}
                aria-pressed={t.key === topicKey}
                onClick={() => setTopicKey(t.key)}
              >
                {t.label}
              </Topic>
            ))}
          </TopicTrack>
          <TopicList ref={listRef} role="group" aria-labelledby="contact-topic-label">
            {listIndicator && <TopicListIndicator aria-hidden="true" style={listIndicator} />}
            {TOPICS.map((t) => (
              <TopicRow
                key={t.key}
                type="button"
                className="no-hover"
                $active={t.key === topicKey}
                aria-pressed={t.key === topicKey}
                onClick={() => setTopicKey(t.key)}
              >
                <TopicRadio $active={t.key === topicKey} aria-hidden="true" />
                <TopicText>
                  <strong>{t.label}</strong>
                  <span>{t.promise}</span>
                </TopicText>
              </TopicRow>
            ))}
          </TopicList>

          <Fit key={topicKey} aria-live="polite">
            <b>{topic.promise}</b> {topic.detail}
          </Fit>

          <Actions>
            <BigButton href={mailto} className="neu-sm no-hover">
              <FiMail /> Email me
            </BigButton>
            <BigButton
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-sm no-hover"
              onClick={onLinkedIn}
            >
              <FiLinkedin /> {copied === 'draft' ? 'Draft copied' : 'LinkedIn'}
            </BigButton>
          </Actions>
        </Card>
      </ContactLayout>

      <Footer>
        <span>© {new Date().getFullYear()} Vedant Solanki</span>
        <span>
          Need a product built?{' '}
          <a href="https://theideaforgelabs.com/" target="_blank" rel="noopener noreferrer" className="no-hover">
            IdeaForgeLabs ↗
          </a>
        </span>
      </Footer>
    </>
  );
};

export default Contact;

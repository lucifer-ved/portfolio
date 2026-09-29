import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { FiExternalLink, FiMaximize2, FiX } from 'react-icons/fi';
import { Certificates, ExamPrep, NowLearning } from '../../CertificationData';
import {
  NowRow,
  NowLabel,
  TopicChip,
  BadgeGrid,
  Badge,
  BadgeMark,
  BadgeTitle,
  BadgeMeta,
  BadgeFoot,
  CredentialId,
  BadgeActions,
  PillButton,
  PillLink,
  StatusBadge,
  LightboxMeta,
  LightboxActions,
  LightboxBackdrop,
  LightboxPanel,
  LightboxImageWrap,
  LightboxFooter,
  LightboxTitle,
  CloseButton
} from './CertificationsElements';

// True once the certificate image has loaded; stays false if the file is missing.
const useImageAvailable = (src) => {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.onload = () => active && setAvailable(true);
    img.onerror = () => active && setAvailable(false);
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  return available;
};

const CertificateLightbox = ({ cert, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <LightboxBackdrop onClick={onClose} role="dialog" aria-modal="true" aria-label={cert.title}>
      <LightboxPanel onClick={(e) => e.stopPropagation()}>
        <LightboxImageWrap className="neu-inset-md">
          <img src={cert.image} alt={`${cert.title} certificate issued to Vedant Solanki`} />
        </LightboxImageWrap>
        <LightboxFooter>
          <div>
            <LightboxTitle>{cert.title}</LightboxTitle>
            <LightboxMeta>
              <span>{cert.issuer} · {cert.platform}</span>
              <span>{cert.date}</span>
              <code>{cert.credentialId}</code>
            </LightboxMeta>
          </div>
          <LightboxActions>
            <PillLink className="no-hover" href={cert.link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink /> Verify
            </PillLink>
            <CloseButton ref={closeRef} className="no-hover" onClick={onClose} aria-label="Close certificate">
              <FiX />
            </CloseButton>
          </LightboxActions>
        </LightboxFooter>
      </LightboxPanel>
    </LightboxBackdrop>,
    document.body
  );
};

const CertificateBadge = ({ cert, onOpen }) => {
  const hasImage = useImageAvailable(cert.image);

  return (
    <Badge className="neu-lg">
      <BadgeMark className="neu-sm">{cert.mark}</BadgeMark>
      <BadgeTitle>{cert.title}</BadgeTitle>
      <BadgeMeta>{cert.issuer} · {cert.date}</BadgeMeta>
      <BadgeFoot className="neu-inset-md">
        <CredentialId title="Credential ID">{cert.credentialId}</CredentialId>
        <BadgeActions>
          {hasImage && (
            <PillButton type="button" className="neu-sm no-hover" onClick={() => onOpen(cert)}>
              <FiMaximize2 /> View
            </PillButton>
          )}
          <PillLink
            className="neu-sm no-hover"
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${cert.title} on Coursera`}
          >
            Verify <FiExternalLink />
          </PillLink>
        </BadgeActions>
      </BadgeFoot>
    </Badge>
  );
};

const Certifications = () => {
  const [openCert, setOpenCert] = useState(null);
  const closeCert = useCallback(() => setOpenCert(null), []);

  return (
    <>
      <NowRow className="reveal">
        <NowLabel>Now learning</NowLabel>
        {NowLearning.map((topic) => (
          <TopicChip key={topic}>{topic}</TopicChip>
        ))}
      </NowRow>

      <BadgeGrid className="reveal">
        {Certificates.map((cert) => (
          <CertificateBadge key={cert.credentialId} cert={cert} onOpen={setOpenCert} />
        ))}

        <Badge $exam>
          <BadgeMark $exam>{ExamPrep.mark}</BadgeMark>
          <BadgeTitle>{ExamPrep.title}</BadgeTitle>
          <BadgeMeta>{ExamPrep.issuer} · Exam {ExamPrep.exam}</BadgeMeta>
          <BadgeFoot>
            <StatusBadge>{ExamPrep.status}</StatusBadge>
            <PillLink className="neu-sm no-hover" href={ExamPrep.link} target="_blank" rel="noopener noreferrer">
              Exam <FiExternalLink />
            </PillLink>
          </BadgeFoot>
        </Badge>
      </BadgeGrid>

      {openCert && <CertificateLightbox cert={openCert} onClose={closeCert} />}
    </>
  );
};

export default Certifications;

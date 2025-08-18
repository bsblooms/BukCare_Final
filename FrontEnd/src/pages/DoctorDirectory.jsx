import DoctorCard from './DoctorCard';

const doctors = [
  { id: 1, name: 'Dr. Alice Reyes', specialization: 'Cardiologist' },
  { id: 2, name: 'Dr. Bob Santos', specialization: 'Neurologist' },
  { id: 3, name: 'Dr. Claire Dela Cruz', specialization: 'Pediatrician' },
];

export default function DoctorDirectory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}

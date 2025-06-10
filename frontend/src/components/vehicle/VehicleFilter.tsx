import React from 'react';

interface Department {
  id: string;
  name: string;
}

interface VehicleFilterProps {
  departments: Department[];
  departmentFilter: string;
  setDepartmentFilter: (id: string) => void;
  onlyFree: boolean;
  setOnlyFree: (v: boolean) => void;
  search: string;
  setSearch: (v: string) => void;
}

const VehicleFilter: React.FC<VehicleFilterProps> = ({
  departments, departmentFilter, setDepartmentFilter,
  onlyFree, setOnlyFree, search, setSearch
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap items-center gap-4">
    <div className="flex-1 min-w-[200px]">
      <label className="block text-sm font-medium text-gray-700 mb-1">부서별 필터</label>
      <select
        className="block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
        value={departmentFilter}
        onChange={e => setDepartmentFilter(e.target.value)}
      >
        {departments.map((dept: Department) => (
          <option key={`dept-${dept.id}`} value={dept.id}>{dept.name}</option>
        ))}
      </select>
    </div>
    <div className="flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={onlyFree}
          onChange={() => setOnlyFree(!onlyFree)}
        />
        <div className={`relative w-10 h-5 transition-colors duration-200 ease-in-out rounded-full ${onlyFree ? 'bg-green-500' : 'bg-gray-200'}`}>
          <div className={`absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out transform ${onlyFree ? 'translate-x-5' : 'translate-x-0'}`}></div>
        </div>
        <span className="ml-2 text-sm text-gray-700">사용 가능한 차량만 보기</span>
      </label>
    </div>
    <div className="relative flex-1 min-w-[200px]">
      <label className="block text-sm font-medium text-gray-700 mb-1">검색</label>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        placeholder="차량 번호 또는 모델명 검색"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="fas fa-search text-gray-400"></i>
      </div>
    </div>
  </div>
);

export default VehicleFilter;